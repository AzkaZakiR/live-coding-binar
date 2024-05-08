"use client"

import Image from 'next/image';
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();

    function handlePickImage() {
        console.log("test");
        imageInput.current.click();
    }

    function handleImageChange() {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null)
            return;
        }
        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file);
    }


    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p> No Image picked yet    </p>}
                    {pickedImage && (
                        <Image src={pickedImage} alt="The image selected by User" fill />
                    )}
                </div>
                <input className={classes.input} type='file' id='image' accept='image/png, image/jpg' name={name} ref={imageInput} onChange={handleImageChange} />
                <button className={classes.button} type='button' onClick={handlePickImage}>Pick Image </button>
            </div>

        </div>
    )
}