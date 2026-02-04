import { TimelineNode } from './types';

export const TIMELINE_DATA: TimelineNode[] = [
  {
    id: 1,
    title: "命运的开端",
    description: "故事始于一场意外的相遇。长今的父母在动荡中结缘，为她注定了不平凡的一生。",
    date: "1482年",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACgsxC16juUHMGqxQa_HAPZDfY9I_MHm0g9v6qXEYvQ8RVvLGKPCEMBltNGkN8t22t3hclM9EHcOOr0O0x0Q_CioCw5ar3Dkki-TvihiMmqDlqRMePFfo_7u44WW5WCfFBwt5mD6DTmhA_unZI9B3FXHGiBZTUCC-4yIcPvW8vI4hRK2K3A_QoEzQAWGZDWLTvOLZw8rNKdUORa2Ne-9Rd6oLTsMg-gZ1ycogGtCshL_2mqsYxn69DQ3uMEmltOpKWKqHxhrpigBsR",
    imageAlt: "Beginning of Fate",
    themeColor: "#ee5b2b",
    icon: "sparkles",
    details: {
      fullDescription: "1482年成宗时期，徐天寿参与赐死废妃尹氏，后遇道士预言。他救下朴明伊，两人结为连理，长今出生。这一段缘分，既是爱情的开始，也埋下了日后宫廷斗争的伏笔。",
      quote: "命运的齿轮在这一刻开始转动，红色的结绳连接着两代人的悲欢离合。",
    }
  },
  {
    id: 2,
    title: "失去双亲与入宫",
    description: "失去双亲后的长今，带着母亲的遗愿，独自踏入深不可测的宫廷，开启了她的宫女生涯。",
    date: "1504年",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxo1BJYFj4thJalmmoAKjd8FD88OevkmDf7Q_GOVHasgxdVIaPdU5-JlH1r76oB2tEASh64qdsS39HqL74PT9vXVRdDHq1je8K7l7FoUqvHHz7yZ9Mhvdi2wpoi6wbJPGIKS14x-IFqKf0mXgKu1ZGaekI6B0J38d-TEnc98rrzDWw3_CgYxWD3cj8UQNjibnM2egOhjhc56AnYlJIt9cPxCNbhk61CLsGgt9wndw4PFp-wcog4UcOsvcwbILmsJfOpcUqUeCBXAYJ",
    imageAlt: "Orphaned and Entering Palace",
    themeColor: "#1754cf",
    icon: "castle",
    details: {
      fullDescription: "父母双亡。长今独自进宫，立志洗清母亲冤屈，成为韩尚宫的徒弟。在宫廷的尔虞我诈中，她学会了隐忍与坚强。",
      quote: "在那堆冰冷的乱石前，小长今握着母亲留下的最后的信物，泪水浸湿了粗糙的衣角，却点燃了心中不灭的火焰。",
    }
  },
  {
    id: 3,
    title: "御膳房的修行",
    description: "在韩尚宫的悉心教导下，长今学习食材的真谛，指尖感受自然的馈赠。",
    date: "御膳房时期",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRuN2TLiEKqCUHysOKGKrZkXnOKGHhJRwJpfCs-MtQ1CsTqOrHeOUNwqNGWXrM6dEf9ce9d0orwm7dRviKsYeXtSFF1SOBNhPQ_bH45QOh9B7RLCxadRdl-kiObk4YnoAizdNZoA7oazaKf9-HPGOwczRMVhaAqefvc7IkMJf_ezvmRNAPuK7O-_AWbdnDTCZQPT5ksBJH_L3kmRSRAhe1SKCFszMHblfzeIcb6wAUCKRV-2aZuGPOfanrwgv0ntpvXjRdhyshcDN-",
    imageAlt: "Royal Kitchen Training",
    themeColor: "#11d473",
    icon: "utensils",
    details: {
      fullDescription: "长今进入御膳房，在韩尚宫的指导下学习。她领悟了“画出才会有味道”的道理，展现出对食材惊人的天赋。虽然遭遇了竞争者的嫉恨，但她凭借对料理的诚意最终赢得了赞赏。",
      features: [
        { title: "编织干辣椒", desc: "挂满墙壁的红辣椒，采用羊毛毡针织工艺。", icon: "pepper-hot" },
        { title: "刺绣野菜筐", desc: "叶脉由精细的刺绣完成，还原自然触感。", icon: "leaf" },
        { title: "仿真馒头", desc: "白胖馒头表面有着自然的起伏，银色丝线模拟水滴。", icon: "cookie" }
      ]
    }
  },
  {
    id: 4,
    title: "料理对决",
    description: "为了最高尚宫的位置，也是为了正义，长今与今英展开了宿命般的料理对决。",
    date: "竞赛时期",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1a3h9GYoA9Oc0fsVW5cfg9MytplMNv7C6BZbp0vas5WnVhF6cHjY_S7dKza20PY4iS8vOCx5O-jxPd1ixt1r323wQ8CqA_9fZByNaSHu9Mvh4yootRLD-X2-QRqMYEieSPkDcKmnnBgIoVGJKU4AnBuHRP0nSi0Cbr1uviBqNHYRsUUax56cADr4X0yZP2Fay-HZHmuJnWRGDEJbHWdn0ilp3_-PE5zZhwkIk_jOk9P70MCkI5L2nCgQa2ZZJAQTqcoj5QfGKbdLS",
    imageAlt: "Cooking Duel",
    themeColor: "#9a2e37",
    icon: "swords",
    details: {
      fullDescription: "韩尚宫被陷害，长今独自出战。在绝望与压力之下，她回想起母亲的教诲与自然的馈赠。最终，她以“梅子”为秘诀击败崔尚宫，赢得最高尚宫之位，证明了料理不仅仅是技艺，更是心意。",
      quote: "我要做出最好的味道！"
    }
  },
  {
    id: 5,
    title: "流放济州岛",
    description: "从云端跌落谷底，长今被流放至遥远的济州岛。在绝望中，她发现了新的希望——医术。",
    date: "流放时期",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRiAGf6gxDCw4jEC1RPW-YY70mDQmU2ySx8k9yQAymZDPlTYAXw_QT6Nn3k1iTG3NJA8C2OXnFOzdSONF9SAvcjkME476C24lRXeQrP1Qlhi_axSlfTwJotIaalfJkdwGUbR0HjFTbfHvSdizBzDLdCzJZy4ehIqlfmloF8YqYSCyAATLahBRiTq_3o-Bq3FQvNv8QDPiO5kGxA22JkFlUK1XkwDAHIkWeriHtU6EJs9F5xgnNRjzxqSwkxlL8yOyOmFQqjT_gpqYp",
    imageAlt: "Jeju Island Exile",
    themeColor: "#17cf54",
    icon: "ship",
    details: {
      fullDescription: "即使身陷囹圄，长今眼中的光芒未曾熄灭。在海边，她遇到了严厉的医女张德，开始了从厨师到医者的转变。海边的岩石上晒满了色彩斑斓的草药，红的似火，黄的如金。",
      location: "济州岛海边",
      characters: ["长今", "张德"],
      items: ["草药", "医书"],
      theme: "医术觉醒"
    }
  },
  {
    id: 6,
    title: "医女复仇记",
    description: "带着复仇的决心和救人的仁心，长今以医女身份重返宫廷，揭开昔日的真相。",
    date: "复仇时期",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7Bzrd5418GP1dyfB--GVla8na6Xzvfg450q0DLxamgOi1nFskLXVz6F_3YQurP8v0a2sARqx7VY4VroQXyXDVR9toOaqAcnFyNv-0rYUP9g7-Tm5bb287XtzU1hfqkOhXKeFryaACOtfSlSBDPu_uLjUvxDxX851vnQSX4baxu9ulw3yd9f4fBEqrxqkoeuVloXoIfFz56WMIH0l7tBuNgq-WPp_XEVPuVv_LQFv1NiLcIwbbB2JlBXATMIG6Sk0R8CS1qch6AouW",
    imageAlt: "Medical Revenge",
    themeColor: "#2b3d5b",
    icon: "stethoscope",
    details: {
      fullDescription: "长今以医女身份回宫，揭开硫磺鸭子真相。崔氏家族崩塌，崔尚宫最终坠崖身亡。这不是简单的复仇，而是正义的回归。",
      characters: ["长今", "崔尚宫"],
      location: "宫廷内苑"
    }
  },
  {
    id: 7,
    title: "大长今",
    description: "打破常规，成为朝鲜历史上第一位也是唯一一位女性御医，被赐号“大长今”。",
    date: "御医时期",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhJ5BuTceqwYzQfu1fD0qI-DfPul8trp1aWM-wB_XKNmS_sQ5c4jL-dUJ3TURlAf50cXJeEN9ZfuRBgT-LkJoQppiXauCa8kt2CObFqbweTWtnJv8kg2lqI7HrcwCLcfy-LWuQIMXhPxPbnSzpqqUZtZhNk_jNLzYpbyM58dRgqvG7dFBrYmJYcltIydORaK2rcP736nSmEfgNhnoxgBxqM-KHDZx_yWo1iOFn92j41EsH-hZLD68JGc_50rqikA2nNPKB9YoVsvMZ",
    imageAlt: "The Great Jang Geum",
    themeColor: "#f2b90d",
    icon: "crown",
    details: {
      fullDescription: "中宗打破常规，任命长今为皇帝主治医官，赐号“大长今”。她是朝鲜历史上首位女性御医。这一任命不仅是对她医术的最高认可，更是打破了封建时代严格的性别阶级制度。",
    }
  },
  {
    id: 8,
    title: "最终的团圆",
    description: "历经风雨，长今最终找到了内心的平静与家庭的温暖，故事在温馨中落下帷幕。",
    date: "结局",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbdtsR6SvVpUVL5hMH0zrcXWytJyC8dABN6IjHxR3cxSlpYOGIW-aTn0oLlJzpRt4evq3U25jQKT9E5U7vOAFPMYeoLWcdJDRbvEdDNc-rFQoKYSLCfSLs0XB0vUsC6wopoz5y1mkjPtwKtxMk2ePZkftF04OcACcWchi6qcqYuYR8RkFOC7xlsOuxKaRiL-NXktp4RbzJBXYHaxA8gPiQfpOLZGpwJlEjcoMeISXaso2MmNnMi-4uQ3K8AIH8FaN_ug1rDzvcJIhj",
    imageAlt: "Final Reunion",
    themeColor: "#ec3713",
    icon: "users",
    details: {
      fullDescription: "中宗驾崩后，长今与爱人隐居行医。她在雪地中剖腹产救人，成为真正心怀苍生的伟人。",
      quote: "最终的团圆：超越复仇，心怀苍生，成就传奇大长今。",
      features: [
        { title: "医者仁心", desc: "微型毛毡药箱，内含精细还原的银针与手术刀。", icon: "briefcase-medical" },
        { title: "温馨小屋", desc: "暖黄色LED光芒象征家庭的温暖。", icon: "home" },
        { title: "自然点缀", desc: "雪地上的红浆果与夜空中的繁星。", icon: "tree-pine" }
      ]
    }
  }
];
