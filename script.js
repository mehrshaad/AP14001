// Authors:
// Ali Dadashzadeh & Kiyan Rezaee
// Summer 2021

isPersian = true;
function translateToPersian() {
    var a = document.getElementById('per')
    a.classList.add('persian')
    a.innerHTML = 'فارسی'
    a.style.fontFamily = 'IranYekan'
    var a = document.getElementById('en')
    a.classList.add('persian')
    a.style.fontFamily = 'IranYekan'
    a.innerHTML = 'انگلیسی'
    //header
    var a = document.getElementById('1')
    a.classList.add('persian')
    a.innerHTML = `برنامه سازی پیشرفته 1400-1401
                <br>
                <div class="credits">
                <h4 class="persian" style="font-size: calc(3px + 0.5vw + 0.5vh);font-family: 'IranYekan';">دانشگاه گیلان - دانشکده علوم ریاضی</h4>
                </div>
            </h2>`

    //main - per
    try {
        var a = document.getElementById('0')
        a.innerText = 'برنامه سازی پیشرفته'

        //instructor
        var a = document.getElementById('2')
        a.classList.add('persian')
        a.innerHTML = `مدرس: <a class="link"
        href="https://staff.guilan.ac.ir/eskandari/" target="_blank">دکتر صادق اسکندری</a>`

        //
        var a = document.getElementById('3')
        a.classList.add('persian')
        a.style.direction = "rtl"
        a.innerHTML = `
        امروزه، برنامه نویسی کامپیوتری به یکی از مهارتهای مورد نیاز در بسیاری از علوم تبدیل شده است. در این درس، با مفاهیم پیشرفته برنامه نویسی آشنا خواهیم شد. برنامه نویسی شیء گرا، ساختمان داده ها و طراحی و تحلیل الگوریتمهای کاربردی، از جمله مهمترین این مفاهیم هستند. اگرچه، تمامی این مفاهیم مستقل از یک زبان برنامه نویسی خاص قابل طرح می باشند، در این درس از زبان محبوب <a class="link" href="https://www.python.org/" target="_blank">پایتون</a> به عنوان ابزاری جهت پیاده سازی مفاهیم مورد نظر استفاده خواهیم کرد. دلیل این انتخاب، سادگی، محبوبیت و متن باز بودن این زبان برنامه نویسی است. در این درس، تمرکز ویژه ای بر فعالیت های عملی و گروهی خواهد بود. در طول یک ترم، دانشجویان با نحوه کدنویسی شیء گرا آشنا شده و این مفهوم را در قالب یک پروژه گروهی پایانی پیاده سازی خواهند کرد. در پایان این واحد درسی از دانشجویان محترم انتظار می رود تا بتوانند برای پروژه های بزرگ کلاس های مختلف را طراحی کرده، از ساختمان داده های مناسب برای آنها بهره برده و واسط های گرافیکی کارآمد طراحی کنند. جهت دریافت اطلاعات تکمیلی، به صفحه <a class="link"
        href="https://mehrshaad.github.io/testsite/syllabus.html">رئوس مطالب</a> مراجعه نمائید
        `
        var a = document.getElementById('4')
        a.classList.add('persian')
        a.innerHTML = `رئوس مطالب`

        var a = document.getElementById('5')
        a.classList.add('persian')
        a.innerHTML = `فایل های درسی بارگذاری شده به همراه اطلاعاتی درباره منابع و جزئیات ریز نمرات`

        var a = document.getElementById('6')
        a.classList.add('persian')
        a.innerHTML = `تیم حل تمرین`

        var a = document.getElementById('7')
        a.classList.add('persian')
        a.innerHTML = `لیست اعضای حل تمرین این ترم`

        var a = document.getElementById('8')
        a.classList.add('persian')
        a.innerHTML = `پروژه های پایانی`

        var a = document.getElementById('9')
        a.classList.add('persian')
        a.innerHTML = `اطلاعات کامل در مورد پروژه های پایانی`
        var a = document.getElementById('10')
        a.classList.add('persian')
        a.innerHTML = `صفحه تمرین ها`
        var a = document.getElementById('11')
        a.classList.add('persian')
        a.innerHTML = `اطلاعاتی در مورد تمرین های ارسالی در طول ترم`
    } catch { }

    //syllabus - per
    try {
        var a = document.getElementById('12')
        a.innerText = 'رئوس مطالب'

        var a = document.getElementById('12.5')
        a.style.direction = "rtl"

        var a = document.getElementById('12.75')
        a.innerText = 'محتویات'
        a.style.fontFamily = 'IranYekan'

        var s = document.getElementsByTagName('th');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'IranYekan';
        }

        var s = document.getElementsByTagName('td');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'IranYekan';
        }

        var a = document.getElementById('13')
        a.innerText = 'شماره'

        var a = document.getElementById('14')
        a.innerText = 'تاریخ'

        var a = document.getElementById('15')
        a.innerText = 'موضوع جلسه'

        var a = document.getElementById('16')
        a.innerText = 'مدرس(ها)'

        var a = document.getElementById('17')
        a.innerText = 'لینک'

        var a = document.getElementById('18')
        a.innerText = 'منابع'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('19')
        a.innerText = 'اگرچه منبع منحصر به فردی برای برنامه نویسی پیشرفته مورد استفاده قرار نخواهد گرفت ولی کتاب های زیر میتوانند برای این درس مفید باشند.'
        a.style.fontFamily = 'IranYekan'
        a.style.direction = "rtl"

        var a = document.getElementById('20')
        a.innerText = 'جزئیات نمره'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('21')
        a.innerText = 'میانترم : 4 نمره'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('22')
        a.innerText = ' پایانترم :  10 نمره'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('23')
        a.innerText = 'پروژه نهایی : 3 نمره'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('24')
        a.innerText = 'تمرین ها : 1 نمره (به ازای هر یک)'
        a.style.fontFamily = 'IranYekan'
    } catch { }

    //TAT - per
    try {
        var a = document.getElementById('titleTA')
        a.innerText = 'تیم حل تمرین'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('kiyan')
        a.innerText = 'کیان رضایی'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('headta')
        a.innerText = 'مسئول کمک مدرسین'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email0')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta1')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email1')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta2')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email2')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta3')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email3')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta4')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email4')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta5')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email5')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta6')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email6')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta7')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email7')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta8')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email8')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('erfan')
        a.innerHTML = 'عرفان<br>محرم زاده'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('amir')
        a.innerHTML = 'امیر<br>اصغری'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('mehrshad')
        a.innerHTML = 'علی<br>داداش زاده'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sara')
        a.innerHTML = 'سارا<br>مظاهری'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('rahimi')
        a.innerHTML = 'امیرحسین<br>رحیمی'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('morteza')
        a.innerHTML = 'مرتضی<br>ضیابخش'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('amirmohammad')
        a.innerHTML = 'امیرمحمد<br>صابرحبیبی'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('faeze')
        a.innerHTML = 'فائزه<br>رحمتی'
        a.style.fontFamily = 'IranYekan'
    } catch { }

    //homework - per
    try {
        var a = document.getElementById('titleHomework')
        a.innerText = 'تمرین ها'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('exer')
        a.innerText = 'تمرین ها'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('notes')
        a.innerText = 'نکات'
        a.classList.add('persian')
        a.style.textAlign = 'right'

        var a = document.getElementById('notes_')
        a.classList.add('persian')
        a.style.direction = "rtl"

        var a = document.getElementById('li1')
        a.innerText = 'تمرین ها به صورت انفرادی میباشند.'
        a.classList.add('persian')
        a.style.textAlign = 'right'

        var a = document.getElementById('li2')
        a.innerText = ''
        a.classList.add('persian')
        a.style.textAlign = 'right'

        var a = document.getElementById('li3')
        a.innerText = 'کپی برداری تمرین = نمره صفر'
        a.classList.add('persian')
        a.style.textAlign = 'right'

        var a = document.getElementById('table')
        a.style.direction = "rtl"

        var s = document.getElementsByTagName('th');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'IranYekan';
        }

        var s = document.getElementsByTagName('td');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'IranYekan';
        }

        var a = document.getElementById('13')
        a.innerText = 'شماره'

        var a = document.getElementById('14')
        a.innerText = 'فایل ها'

        var a = document.getElementById('15')
        a.innerText = 'تاریخ تحویل'

        var a = document.getElementById('16')
        a.innerText = 'نمرات'

    } catch { }
}

function translateToEnglish() {
    isPersian = false;
    var a = document.getElementById('per')
    a.classList.remove('persian')
    a.style.fontFamily = "Comic Sans MS"
    a.innerHTML = 'Persian'
    var a = document.getElementById('en')
    a.classList.remove('persian')
    a.style.fontFamily = "Comic Sans MS"
    a.innerHTML = 'English'
    //header
    var a = document.getElementById('1')
    a.classList.remove('persian')
    a.innerHTML = `Advanced Programming 2020-21
                <br>
                <div class="credits">
                <h4 style="font-size: calc(3px + 0.5vw + 0.5vh);">© Copyright Guilan University</h4>
                </div>
            </h2>`

    //main - en
    try {
        var a = document.getElementById('0')
        a.innerText = 'Advanced Programming'


        var a = document.getElementById('2')
        a.classList.remove('persian')
        a.innerHTML = `Instructor: <a class="link"
        href="https://staff.guilan.ac.ir/eskandari/" target="_blank">Dr. Sadegh Eskandari</a>`

        var a = document.getElementById('3')
        a.classList.remove('persian')
        a.style.direction = "ltr"
        a.innerHTML = `Nowadays, programming is one of the most needed skills. In this lesson we'll learn some topics of
      advanced programming. Object oriented programming, data structure and algorithm analyzing are the most important
      ones.
      Although, all of these topics are independent from a special programming language, but we use one of the most
      liked
      programming
      languages, which is <a class="link" href="https://www.python.org/" target="_blank">Python!</a> We chose python
      because it's simple, likeable and open source. In this
      lesson,
      most of our focus
      is on your teamworks and scientific activities. You'll learn object oriented programming, and you'll have to
      implement a project as a final teamwork result. At the end you'll be expected to write classes, use data
      structures and
      design a graphical user
      interface for your project.
      For more information visit the <a class="link"
        href="https://mehrshaad.github.io/testsite/syllabus.html">Syllabus</a> page.`

        var a = document.getElementById('4')
        a.classList.remove('persian')
        a.innerHTML = `Syllabus`

        var a = document.getElementById('5')

        a.classList.remove('persian')
        a.innerHTML = `Uploaded files and more information about resources of this lesson and scoring details`

        var a = document.getElementById('6')
        a.classList.remove('persian')
        a.innerHTML = `Teaching Assistant Team`

        var a = document.getElementById('7')
        a.classList.remove('persian')
        a.innerHTML = `A list of this semester teaching assistants and contacting information`

        var a = document.getElementById('8')
        a.classList.remove('persian')
        a.innerHTML = `Final Projects`

        var a = document.getElementById('9')
        a.classList.remove('persian')
        a.innerHTML = `Your final projects which you have to implement one of them for the end`

        var a = document.getElementById('10')
        a.classList.remove('persian')
        a.innerHTML = `Homework`

        var a = document.getElementById('11')
        a.classList.remove('persian')
        a.innerHTML = `More information about problem sets and their deadlines`
    } catch { }

    //syllabus - en
    try {
        var a = document.getElementById('12')
        a.innerText = `Syllabus`

        var a = document.getElementById('12.5')
        a.style.direction = "ltr"

        var a = document.getElementById('12.75')
        a.classList.remove('persian')
        a.style.fontFamily = "Comic Sans MS"
        a.innerHTML = `Contents`

        var s = document.getElementsByTagName('th');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'Consolas';
        }

        var s = document.getElementsByTagName('td');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'Arial';
        }

        var a = document.getElementById('13')
        a.innerHTML = `Number`

        var a = document.getElementById('14')
        a.innerHTML = `Date`

        var a = document.getElementById('15')
        a.innerHTML = `Subject`

        var a = document.getElementById('16')
        a.innerHTML = `Instructor(s)`

        var a = document.getElementById('17')
        a.innerHTML = `link`

        var a = document.getElementById('18')
        a.classList.remove('persian')
        a.style.fontFamily = "Comic Sans MS"
        a.innerHTML = `Resources`

        var a = document.getElementById('19')
        a.classList.remove('persian')
        a.style.fontFamily = "Consolas"
        a.innerHTML = `Although we don't use any source book for advanced programming, but you
            can read these books for improving your skills.`
        a.style.direction = "ltr"

        var a = document.getElementById('20')
        a.classList.remove('persian')
        a.style.fontFamily = "Comic Sans MS"
        a.innerHTML = `Scoring Details`

        var a = document.getElementById('21')
        a.classList.remove('persian')
        a.style.fontFamily = "Consolas"
        a.innerHTML = `Midterm: 4 point`

        var a = document.getElementById('22')
        a.classList.remove('persian')
        a.style.fontFamily = "Consolas"
        a.innerHTML = `Final Exam: 10 point`

        var a = document.getElementById('23')
        a.classList.remove('persian')
        a.style.fontFamily = "Consolas"
        a.innerHTML = `Project: 3 point`

        var a = document.getElementById('24')
        a.classList.remove('persian')
        a.style.fontFamily = "Consolas"
        a.innerHTML = `Problem Set: 1 point (for each)`
    } catch { }

    //TAT - en
    try {
        var a = document.getElementById('titleTA')
        a.innerText = 'Head Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('kiyan')
        a.innerText = 'Kiyan Rezaee'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('headta')
        a.innerText = 'Teaching Assistants Leader'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email0')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta1')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email1')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta2')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email2')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta3')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email3')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta4')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email4')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta5')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email5')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta6')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email6')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta7')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email7')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta8')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email8')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('erfan')
        a.innerHTML = 'Erfan<br>Moharamzadeh'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('amir')
        a.innerHTML = 'Amir<br>Asghari'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('mehrshad')
        a.innerHTML = 'Ali<br>Dadashzadeh'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('sara')
        a.innerHTML = 'Sara<br>Mazaheri'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('rahimi')
        a.innerHTML = 'Amirhossien<br>Rahimi'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('morteza')
        a.innerHTML = 'Morteza<br>Ziabakhsh'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('amirmohammad')
        a.innerHTML = 'Amirmohammad<br>Saberhabibi'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('faeze')
        a.innerHTML = 'Faeze<br>Rahmati'
        a.style.fontFamily = 'Segoe UI'
    } catch { }

    //homework - en
    try {
        var a = document.getElementById('titleHomework')
        a.innerText = 'Homework'
        a.style.fontFamily = 'Comic Sans MS'

        var a = document.getElementById('exer')
        a.innerText = 'Exercise'
        a.style.fontFamily = 'Comic Sans MS'

        var a = document.getElementById('notes')
        a.innerText = 'NOTES'
        a.classList.remove('persian')
        a.style.textAlign = 'left'

        var a = document.getElementById('notes_')
        a.classList.remove('persian')
        a.style.direction = "ltr"

        var a = document.getElementById('li1')
        a.innerText = 'All of the exercises must be done individually.'
        a.classList.remove('persian')
        a.style.textAlign = 'left'

        var a = document.getElementById('li2')
        a.classList.remove('persian')
        a.innerText = ''
        a.style.textAlign = 'left'

        var a = document.getElementById('li3')
        a.innerText = 'Copied answer equals to 0 points for both sides.'
        a.classList.remove('persian')
        a.style.textAlign = 'left'

        var a = document.getElementById('table')
        a.style.direction = "ltr"

        var s = document.getElementsByTagName('th');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'Consolas';
        }

        var s = document.getElementsByTagName('td');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'Arial';
        }

        var a = document.getElementById('13')
        a.innerText = 'Number'

        var a = document.getElementById('14')
        a.innerText = 'Files'

        var a = document.getElementById('15')
        a.innerText = 'Deadline'

        var a = document.getElementById('16')
        a.innerText = 'Scores'

    } catch { }
}

window.onload = function () {
    if (isPersian)
        translateToPersian()
    else
        translateToEnglish()
}