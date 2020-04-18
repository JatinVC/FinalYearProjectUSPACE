export function buildURL(endpoint){
    let url = process.env.REACT_APP_API_URL || '';
    return url + endpoint;
}