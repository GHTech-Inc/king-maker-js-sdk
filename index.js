const API = {
    login : function(data, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/login');

        this._call('POST', url, data, successCallback, errorCallback);
    }, 
    register : function(data, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/register');

        this._call('POST', url, data, successCallback, errorCallback);
    },
    createAffirmation : function(data, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/affirmations');

        this._call('POST', url, data, successCallback, errorCallback);
    },
    updateAffirmation : function(id, data, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/affirmations/' + id);

        this._call('PUT', url, data, successCallback, errorCallback);
    },
    getAffirmation : function(id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/affirmations/' + id);

        this._call('GET', url, null, successCallback, errorCallback);
    },
    getAffirmationsBySentUser : function(id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/affirmations?sentuser=' + id);

        this._call('GET', url, null, successCallback, errorCallback);
    },
    getAffirmationsByRecievingUser : function(id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/affirmations?recevinguser=' + id);

        this._call('GET', url, null, successCallback, errorCallback);
    },
    getAffirmationsBySchool : function(id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/affirmations?=school' + id);

        this._call('GET', url, null, successCallback, errorCallback);
    },
    deleteAffirmation : function(id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/affirmations/' + id);

        this._call('DELETE', url, null, successCallback, errorCallback);
    },
    
    
    createPost : function(data, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post');

        this._call('POST', url, data, successCallback, errorCallback);
    },
    updatePost : function(id, data, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post/' + id);

        this._call('PUT', url, data, successCallback, errorCallback);
    },
    getPost : function(id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post/' + id);

        this._call('GET', url, null, successCallback, errorCallback);
    },
    getPostByUser : function(id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post?user=' + id);

        this._call('GET', url, null, successCallback, errorCallback);
    },
    getPostBySchool : function(id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post?=school' + id);

        this._call('GET', url, null, successCallback, errorCallback);
    },
    deletePost : function(id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post/' + id);

        this._call('DELETE', url, null, successCallback, errorCallback);
    },
    createPostComment : function(post_id, data, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post/' + post_id + '/comments' );

        this._call('POST', url, data, successCallback, errorCallback);
    },
    updatePostComment : function(post_id, comment_id, data, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post/' + post_id + '/comments/' + comment_id );

        this._call('PUT', url, data, successCallback, errorCallback);
    },
    deletePostComment : function(post_id, comment_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post/' + post_id + '/comments/' + comment_id );

        this._call('DELETE', url, data, successCallback, errorCallback);
    },
    getPostComments : function(post_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post/' + post_id + '/comments');

        this._call('GET', url, null, successCallback, errorCallback);
    },
    getPostComment : function(post_id, comment_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post/' + post_id + '/comments/' + comment_id);

        this._call('GET', url, null, successCallback, errorCallback);
    },
    togglePostLike : function(post_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post/' + post_id + '/like');

        this._call('POST', url, null, successCallback, errorCallback);
    },
    togglePostHeart : function(post_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post/' + post_id + '/heart');

        this._call('POST', url, null, successCallback, errorCallback);
    },
    togglePostCommentLike : function(post_id, comment_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post/' + post_id + '/comment/'+ comment_id + '/like');

        this._call('POST', url, null, successCallback, errorCallback);
    },
    togglePostCommentHeart : function(post_id, comment_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/post/' + post_id + '/comment/'+ comment_id + '/heart');

        this._call('POST', url, null, successCallback, errorCallback);
    },
    


    createDiscussion : function(data, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion');

        this._call('POST', url, data, successCallback, errorCallback);
    },
    updateDiscussion : function(id, data, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion/' + id);

        this._call('PUT', url, data, successCallback, errorCallback);
    },
    getDiscussion : function(id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion/' + id);

        this._call('GET', url, null, successCallback, errorCallback);
    },
    getDiscussionByUser : function(id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion?user=' + id);

        this._call('GET', url, null, successCallback, errorCallback);
    },
    getDiscussionBySchool : function(id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion?=school' + id);

        this._call('GET', url, null, successCallback, errorCallback);
    },
    deleteDiscussion : function(id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion/' + id);

        this._call('DELETE', url, null, successCallback, errorCallback);
    },
    createDiscussionComment : function(discussion_id, data, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion/' + discussion_id + '/comments' );

        this._call('POST', url, data, successCallback, errorCallback);
    },
    updateDiscussionComment : function(discussion_id, comment_id, data, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion/' + discussion_id + '/comments/' + comment_id );

        this._call('PUT', url, data, successCallback, errorCallback);
    },
    deleteDiscussionComment : function(discussion_id, comment_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion/' + discussion_id + '/comments/' + comment_id );

        this._call('DELETE', url, data, successCallback, errorCallback);
    },
    getDiscussionComments : function(discussion_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion/' + discussion_id + '/comments');

        this._call('GET', url, null, successCallback, errorCallback);
    },
    getDiscussionComment : function(discussion_id, comment_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion/' + discussion_id + '/comments/' + comment_id);

        this._call('GET', url, null, successCallback, errorCallback);
    },
    toggleDiscussionLike : function(discussion_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion/' + discussion_id + '/like');

        this._call('POST', url, null, successCallback, errorCallback);
    },
    toggleDiscussionHeart : function(discussion_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion/' + discussion_id + '/heart');

        this._call('POST', url, null, successCallback, errorCallback);
    },
    toggleDiscussionCommentLike : function(discussion_id, comment_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion/' + discussion_id + '/comment/'+ comment_id + '/like');

        this._call('POST', url, null, successCallback, errorCallback);
    },
    toggleDiscussionCommentHeart : function(discussion_id, comment_id, successCallback, errorCallback){
        let url = this._getUrlWithApiDomain('/discussion/' + discussion_id + '/comment/'+ comment_id + '/heart');

        this._call('POST', url, null, successCallback, errorCallback);
    },
    _getUrlWithApiDomain: function (url) {
        return process.env.REACT_APP_BW_API_URL + url;
    },
    _getAuthToken: function () {
        return process.env.REACT_APP_BW_AUTH_TOKEN;
    },
    _call: function (method, url, options,successCallback, errorCallback) {

        const auth_token = this._getAuthToken();

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth_token
            },
            body: (options) ? JSON.stringify(options) : null
        }).then(function (response) {

            if (!response.ok) { 
                throw new Error(`HTTP error ${response.status}`);
            }

            return response.json();
        }).then(function (response) {
            
            if(response.status === 'success'){
                successCallback(response.data);
            } else if(response.status === 'failure'){
                errorCallback(response.errors);
            }
        });
    },
    _uploadFile : function(url, file, options, successCallback, errorCallback) {

        let formData = new FormData();

        const auth_token = this._getAuthToken();

        if(typeof options === 'object' && options !== null){

            for (const [key, value] of Object.entries(options)) {
                formData.append(key, value);
            }//end for
        }

        formData.append('file', file);

        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': auth_token
            },
            body: formData
        }).then(function (response) {

            if (!response.ok) { 
                throw new Error(`HTTP error ${response.status}`);
            }

            return response.json();
        }).then(function (response) {
            
            if(response.status === 'success'){
                successCallback(response.data);
            } else if(response.status === 'failure'){
                errorCallback(response.errors);
            }
        });

    },

}

export default API;