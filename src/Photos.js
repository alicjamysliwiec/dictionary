import React from "react";
import "./Photos.css";

export default function Photos(props) {
    return (
        <div className="Photos">
            {props.photos &&
                <div className="row">
                    {props.photos.map(function (photo, index) {
                        return (
                            <div className="col-lg-4" key={index}>
                                <a href={photo.src.original} rel="noopener noreferrer" target=" _blank" >
                                    < img className="img-fluid p-2" src={photo.src.landscape} alt="gallery" />
                                </a>
                            </div>
                        )
                    })}

                </div>
            }
        </div >
    )
}
