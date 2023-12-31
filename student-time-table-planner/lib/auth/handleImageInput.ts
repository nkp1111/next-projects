import { CourseType, ClassType } from "@/types";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { hideNotification, showNotification } from "../general/notification";


/**
 * @desc Sets image file data to register data
 * @param e - image select event
 * @param setRegisterData - set register data of student
 * @returns  
 */
export async function handleImageInput(
  e: ChangeEvent<HTMLInputElement>,
  setRegisterData: Dispatch<SetStateAction<{
    name: string;
    email: string;
    password: string;
    bio: string;
    photo: string;
    courses: CourseType[];
    classes: ClassType[];
  }>>
) {
  const imgFile = e.target.files![0]

  if (imgFile) {
    const reader = new FileReader();
    showNotification({ title: "Image Reader", message: "Please wait, Image is being read.", loading: true })
    reader.onload = (event) => {
      hideNotification();
      if (event.target?.readyState === reader.DONE) {
        const imgData = event.target.result as string;
        setRegisterData((prev) => ({ ...prev, photo: imgData }));
      }
    }

    reader.onerror = (e) => {
      hideNotification();
      showNotification({ title: "Image Reader", message: "File Reader Error", error: true })
    }
    reader.readAsDataURL(imgFile);
  }
}