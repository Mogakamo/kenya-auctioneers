import { useCallback } from "react";
import { Controller, useController, useFormContext } from "react-hook-form";
import useStore from "../../store"; // <--- import useStore hook
import Spinner from "../Reusables/Spinner";

const CLOUDINARY_UPLOAD_PRESET = "salems-system";
const CLOUDINARY_URL =
  "https://api.cloudinary.com/v1_1/mogaka-dev/image/upload";

type FileUpLoaderProps = {
  name: string;
};

const FileUpLoader: React.FC<FileUpLoaderProps> = ({ name }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { field } = useController({ name, control });
  const store = useStore();

  const onFileDrop = useCallback(
    async (e: React.SyntheticEvent<EventTarget>) => {
      const target = e.target as HTMLInputElement;

      if (!target.files) return;
      
      const newFile = Object.values(target.files).map((file: File) => file);

      const formData = new FormData();

      formData.append("file", newFile[0]!);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      store.setUploadingImage(true);

      const data = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          store.setUploadingImage(false);
          return res.json();
        })
        .catch((e) => {
          store.setUploadingImage(false);
          console.log(e);
        });

      if (data.secure_url) {
        field.onChange(data.secure_url);
      }
    },
    [field, store]
  );
  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      render={({ field: { name, onBlur, ref } }) => (
        <>
          <div>
            <div>
              <span>Choose profile photo</span>
              <input
                type="file"
                className=""
                name={name}
                onBlur={onBlur}
                ref={ref}
                onChange={onFileDrop}
                multiple={false}
                accept="image/jpg, image/png, image/jpeg"
              />
            </div>
            <div>
              {store.uploadingImage && <Spinner color="text-yellow-400" />}
            </div>
          </div>
          <p
            className={`text-red-500 text-xs italic mb-2 ${
              errors[name] ? "visible" : "invisible"
            }`}
          >
            {errors[name] && (errors[name]?.message as string)}
          </p>
        </>
      )}
    />
  );
};

export default FileUpLoader;
