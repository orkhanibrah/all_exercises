import dataArray from './data.json';

const PostList = () => {
    // dataArray.map(post => {
    //     let postObject = JSON.parse(JSON.stringify(post))
    //     return (
    //         <div>
    //             <h2>{postObject.title}</h2><br></br>
    //             <p>{postObject.content}</p>
    //         </div>
    //     )
    // })
    console.log(dataArray)
    return (
        dataArray.map(post => {
            let postObj = JSON.parse(JSON.stringify(post))
            return (
                <div>
                    <h2>{postObj.title}</h2><br></br>
                    <p>{postObj.content}</p>
                </div>
            )
        }
    )
    )

    
}

export default PostList;