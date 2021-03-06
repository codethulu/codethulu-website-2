
import React from 'react';
import './ProjectCard.css'
import ScrollAnimation from 'react-animate-on-scroll';

function projectCard(props: { name: string; titleCard: boolean; description: string; tags: string[]; image: string; showcase: boolean; }) {
  return (


    <div className='project-card'>


      {/* if (props.titleCard){
          <div className={'title title-' + props.image}></div>;
        } else {
          <h1> {props.name} </h1>;
        } */}

      {/* {props.titleCard ? (<div className={'title title-' + props.image}></div>) : (<h1> {props.name} </h1>)} */}





      <div className={'image image-' + props.image}></div>
      {props.titleCard ? (<div className={'title title-' + props.image}></div>) : (<h1> {props.name} </h1>)}
      {/* {props.showcase ? (<p> {props.description}</p>) : (<p> Read More</p>)} */}
      <p> {props.description}</p>
      {/* <p>...</p> */}

      {props.tags.map((e) => {
        let tagStyle = 'tag'
        if (e == "java" || e == "javascript") {
          tagStyle += ' orange'
        } else if (e == "haskell") {
          tagStyle += ' purple'
        } else if (e == "c") {
          tagStyle += ' green'
        } else if (e == "postgresql") {
          tagStyle += ' cobalt'
        } else if (e == "html" || e == "swift") {
          tagStyle += ' fire'
        } else if (e == "css" || e == "typescript") {
          tagStyle += ' ocean'
        } else if (e == "python") {
          tagStyle += ' snake'
        }
        return (
          <div className={tagStyle}>{e}</div>
        );
      })}

    </div >


  )
}
export default projectCard;