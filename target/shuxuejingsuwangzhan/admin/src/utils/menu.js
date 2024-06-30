const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"教师管理",
			            "menuJump":"列表",
			            "tableName":"jiaoshi"
			        }
			    ],
			    "menu":"教师管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"用户管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"用户管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"试卷管理",
			            "menuJump":"列表",
			            "tableName":"exampaper"
			        }
			    ],
			    "menu":"试卷管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"试题管理",
			            "menuJump":"列表",
			            "tableName":"examquestion"
			        }
			    ],
			    "menu":"试题管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "批改",
			                "删除"
			            ],
			            "menu":"考试记录",
			            "menuJump":"列表",
			            "tableName":"examrecord"
			        },
			        {
			            "buttons":[
			                "查看",
			                "删除"
			            ],
			            "menu":"错题本",
			            "menuJump":"列表",
			            "tableName":"examrewrongquestion"
			        }
			    ],
			    "menu":"考试管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"论坛管理",
                        "menuJump":"列表",
                        "tableName":"forum"
                    }
                ],
                "menu":"论坛管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"公告信息管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"公告信息管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"试题类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryExamquestion"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"公告信息类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryNews"
			        }
			    ],
			    "menu":"基础数据管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,{
	    "backMenu":[
	        {
	            "child":[
	                {
	                "buttons":[
                            "查看",
                            "考试"
	                    ],
	                    "menu":"试卷列表",
	                    "menuJump":"列表",
	                    "tableName":"exampaper"
	                },
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"考试记录",
	                    "menuJump":"列表",
	                    "tableName":"examrecord"
	                },
	                {
	                    "buttons":[
	                        "查看",
	                        "删除"
	                    ],
	                    "menu":"错题本",
	                    "menuJump":"列表",
	                    "tableName":"examrewrongquestion"
	                }
	            ],
	            "menu":"考试管理"
	        }
	    ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
	},
	{
	    "backMenu":[
	        {
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"用户管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"用户管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"试卷管理",
			            "menuJump":"列表",
			            "tableName":"exampaper"
			        }
			    ],
			    "menu":"试卷管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"试题管理",
			            "menuJump":"列表",
			            "tableName":"examquestion"
			        }
			    ],
			    "menu":"试题管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "批改"
			            ],
			            "menu":"考试记录",
			            "menuJump":"列表",
			            "tableName":"examrecord"
			        }
			    ],
			    "menu":"考试管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"论坛管理",
	                    "menuJump":"列表",
	                    "tableName":"forum"
	                }
	            ],
	            "menu":"论坛管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"公告信息管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"公告信息管理"
			}
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"教师",
	    "tableName":"jiaoshi"
	}
]
    }
}
export default menu;
