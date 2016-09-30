function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function getMessage(id,obj){
    switch(id){
      case "1":
      obj.setData({
        message:[
          {
            img:"../../image/adam.jpg",
            text:"你好",
            me:false
          },
          {
            img:"../../image/adam.jpg",
            text:"哈哈",
            me:true
          }
        ]
      })
      break;
      case "2":
      obj.setData({
        message:[
          {
            img:"../../image/ben.png",
            text:"干什么呢",
            me:false
          },
          {
            img:"../../image/ben.png",
            text:"干什么呢",
            me:false
          },
          {
            img:"../../image/ben.png",
            text:"干什么呢",
            me:false
          }
        ]
      })
      break;
      case "3":
      obj.setData({
        message:[
          {
            img:"../../image/ben.png",
            text:"hi",
            me:false
          },
          {
            img:"../../image/ben.png",
            text:"hi",
            me:true
          },
          {
            img:"../../image/max.png",
            text:"O(∩_∩)O",
            me:false
          }
        ]
      })
      break;
      case "4":
      obj.setData({
        message:[
          {
            img:"../../image/mike.png",
            text:"搞好了吗",
            me:false
          },
          {
            img:"../../image/mike.png",
            text:"没有",
            me:true
          },
          {
            img:"../../image/mike.png",
            text:"那先不管了",
            me:false
          }
        ]
      })
      break;
      case "5":
      obj.setData({
        message:[
          {
            img:"../../image/perry.png",
            text:"请我吃饭",
            me:true
          },
          {
            img:"../../image/perry.png",
            text:"可以",
            me:false
          }
        ]
      })
      break;
    };
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  getMessage: getMessage
}
