import axios from "axios";

let BaseURL="https://basic-blog.teamrabbil.com/api";

export async function getCategory(){
    let result = await axios.get(BaseURL+"/post-categories");
    if(result.status === 200){
        return result.data;
    }else{
        return [];
    }
}


export async function getNewsLatest(){
    let result = await axios.get(BaseURL + "/post-newest");
    if(result.status === 200){
        return result.data;
    }else{
        return [];
    }
}


export async function getByCategoryPost(id){
    let result = await axios.get(BaseURL + "/post-list/" + id);
    if(result.status === 200){
        return result.data;
    }else{
        return [];
    }
}


export async function getPostDetails(id){
    let result = await axios.get(BaseURL + "/post-details/" + id);
    if(result.status === 200){
        return result.data;
    }else{
        return [];
    }
}


export async function createComment(list_id,author,comment) {
    let res = await axios.post(BaseURL+"/post-details",{"list_id":list_id, "author":author, "comment":comment});
    if(res.status===200){
        return res.data;
    }
    else{
        return []
    }
}