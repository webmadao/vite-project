import  './Card.css'


function Card ({author, story_title, title, story_url, url, _tags}) {
    // console.log(story_title)
    // console.log(author)
    // console.log(comment_text)

    return(
        <div className="card">
            
            <a className="link" href={story_url ? story_url : url} target="_blank">
                <figure>
                 <h1>{story_title ? story_title : title}</h1>
                    <figcaption>
                        <p>{author}, {_tags[2]}</p>
                    </figcaption>
                    
                </figure>
            </a>

        </div>
    )
}

export default Card