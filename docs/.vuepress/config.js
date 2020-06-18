module.exports = {
  "title": "CSQ Blog",
  "description": "小曹的日常分享",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitLab",
            "link": "https://github.com/caosiqing",
            "icon": "reco-gitlab"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "佳利的Blog",
        "desc": "邹佳利的个人博客",
        "link": "https://zoujiali.netlify.app/"
      },
      {
        "title": "xiaoyu",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1247656916@qq.com",
        "link": "https://fengxiaoyu100.netlify.app/"
      }
    ],
	"logo": "/logo_trans.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "Cao Siqing",
    "authorAvatar": "/avatar.png",
    //"record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": false
  }
}