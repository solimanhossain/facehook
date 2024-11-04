import { useContext } from "react";
import { PostContext } from "../context";

export default function usePosts() {
    return useContext(PostContext);
}
