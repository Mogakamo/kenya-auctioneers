import create from "zustand"
import { IUser } from "../lib/types";

type Store = {
    authUser: IUser | null;
    uploadedImage: boolean
    pageLoading: boolean
    setAuthUser: (user: IUser | null) => void;
    setUploadedImage: (isUploading: boolean) => void;
    setPageLoading: (isLoading: boolean) => void;
}