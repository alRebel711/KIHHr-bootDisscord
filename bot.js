const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
 
 client.on('ready', () => {

        console.log(`----------------`);
      console.log(`Your Bot in  ${client.guilds.size} Servers `);
              console.log(`----------------`);
      console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
              console.log(`----------------`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
    console.log(`----------------`);

});
   
client.on('message', message => {
    if (message.content == "فكك") {
        var x = ['طيارة', 'اللهم صلي على سيدنا محمد', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط',
        'كتاب',
        'جدار',
        'القرآن',
        'جميل',
        'لعبة',
        'حيوانات',
        'نمر',
        'القسطنطينية',
        'الجبل',
        'كرسي',
        'دولاب',
        'صحراء',
        'طابعة'
        
        ];
        var x2 = ['ط ي ا ر ة', 'ا ل ل ه م ص ل ي ع ل ى س ي د ن ا م ح م د', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط',
        'ك ت ا ب',
        'ج د ا ر',
        'ا ل ق ر آ ن',
        'ج م ي ل',
        'ل ع ب ة',
        'ح ي و ا ن ا ت',
        'ن م ر',
        'ا ل ق س ط ن ط ي ن ي ة',
        'ا ل ج ب ل',
        'ك ر س ي',
        'د و ل ا ب',
        'ص ح ر ا ء',
        'طابعة'
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`لديك من الوقت 20 ثآنية لتفكيك هذه الكلمة __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})
    
    client.on('message', message => {
    if (message.content == "عواصم") {
        var x = ['ماهي عاصمة السعودية ؟', 
        'ماهي عاصمة أفغانستان ؟',
        'ماهي عاصمة الكويت ؟',
        'ماهي عاصمة أوزباكستان ؟',
        'ماهي عاصمة الإمارات ؟',
        'ماهي عاصمة الأردن ؟',
        'ماهي عاصمة لبنان ؟',
        'ماهي عاصمة الصين ؟',
        'ماهي عاصمة اليمن ؟',
        'ماهي عاصمة سوريا ؟',
        'ماهي عاصمة تايلاند ؟',
        'ماهي عاصمة اليابان ؟',
        'ماهي عاصمة تونس ؟',
        'ماهي عاصمة مصر ؟',
        'ماهي عاصمة الولايات المتحدة الإمريكية'

        ];
        var x2 = ['الرياض', //1
        'كابول',//2
        'الكويت',//3
        'طشقند',//4
        'أبو ظبي',//5
        'عمان',//6
        'بيروت',//7
        'بكين',//8
        'صنعاء',//9
        'دمشق',//10
        'بانكوك',//11
        'طوكيو',//12
        'تونس',//13
        'القاهره',
        'واشنطن'
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` __**${x[x3]}**__
 لديك 20 ثآنية للإجآبة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})
    
        client.on('message', message => {
    if (message.content == "اعلام") {
        var x = ['الإمارات',
        'أفغانستان',
        'الأرجنتين',
        'ألبانيا',
        'أستراليا',
        'البحرين',
        'كندا',
        'الصين',
        'ألمانيا',
        'السعودية',
'السويد',
'تونس',
    'تركيا',

        ];
        var x2 = ['🇦🇪', 
        '🇦🇫',
        '🇦🇷',
        '🇦🇱',
        '🇦🇺',
        '🇧🇭',
        '🇨🇦',
        '🇨🇳',
        '🇩🇪',
        '🇸🇦',
'🇸🇪',
'🇹🇳',
    '🇹🇷',
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` ماهو علم  __**${x[x3]}**__ ؟
    لديك 30 ثآنية للإجآبة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})

        client.on('message', message => {
    if (message.content == "امثال") {
        var x = ["أذا ذل مولى فهو ...",
"الإتحاد ...",
"الناس سواسية كأسنان ...",
"ما أشبه الليله",
"البعد ...",
"الماء أهون موجود وأعز ...",
"الهزيمة تحل ...",
"العقل ...",
"البطنة تزيل ...",
"اللبيب بالإشارة ...",
"اخطب لابنتك ولا تخطب ...",
"أعز من الولد ولد ...",
"القرد في عين أمه ...",
"الكتاب يقرأ من ...",
"آخر الحياة ...",
];
        var x2 = ['ذليل',
        "قوة",
        "المشط",
        "بالبارحة",
        "جفاء",
        "مفقود",
        "العزيمة",
        "زينة",
        "الفطنة",
        "يفهم",
        "لابنك",
        "الولد",
        "غزال",
        "عنوانه",
        "الموت",
        
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اكمل المثل التآلي :  __**${x[x3]}**__ ؟
    لديك 30 ثآنية للإجآبة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})
   client.login(process.env.BOT_TOKEN);
