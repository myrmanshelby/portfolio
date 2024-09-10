import React from "react";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project : { title, imageSrc, description, skills, demo, source }}) => {
    return <section>
        <div>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {skills.map((skill, id) => {
                    return (
                    <li key={id}>{skill}</li>)
                })} 
            </ul>
            <div>
                <a href={demo}>Demo</a>
                <a href={source}>Source</a>
            </div>
        </div>
    </section>
}