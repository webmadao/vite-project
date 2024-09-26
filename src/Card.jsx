import  './Card.css'


function Card ({author, story_title, title, story_url, url, _tags}) {
    // console.log(story_title)
    // console.log(author)
    // console.log(comment_text)

    return(
        <>
            
            <a className="link" href={story_url ? story_url : url} target="_blank">
                <div className="card">
                <figure>
                 <h1>{story_title ? story_title : title}</h1>
                    <figcaption>
                        <p>{author}, {_tags[2]}</p>
                    </figcaption>
                </figure>
                </div>
            </a>
        </>
        
    )
}

export default Card