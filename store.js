function getList (params,cb) {
    itemIdObj = {
        'Top': 'topstories.json',
        'News': 'newstories.json',
        'Best': 'beststories.json',
        'Ask': 'askstories.json',
        'Show': 'showstories.json',
        'Jobs': 'jobstories.json',
        'Update': 'updates.json'
    }
    const itemId = itemIdObj[params.type]
    delete params.type
    wx.request({
        url: 'https://hacker-news.firebaseio.com/v0/'+ itemId,
        data: params || {},
        header:{
            "Content-Type":"application/json"
        },
        success: function(res) {
           if(cb && typeof cb === 'function') {
               cb(res.data)
           } else {
               console.log('没有回调函数')
           }
        }
    });
}
module.exports = {
  getList: getList
}