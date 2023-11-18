# NodeJS3-EX
## Week 1
### 1. Data Type in Buffer
بتوان یک dataType تعریف کرد که یک عدد از کاربر بگیرد و آن را در بافر ذخیره کند طوری که تغیری در مقدار آن عدد نشود(چون بافر 8 بیت فضا برای هر المان اختصاص میدهد باید بتوانیم اعداد را طوری ذخیره کرد که تغیری در مقدار اصلی ان نشود و در هنگام استفاده از عدد ذخیره شده مقدار اصلی ان برگردد)
### 2. Gray Scale
برنامه‌ایی بنویسید که عکسی را از طریق fech دریافت کند و ان را سیاه و سفید کند 

### 3. EventEmitter 

تو این تمرین قراره خودمون کلاسی طراحی کنیم که ساختار EventEmitter را داشته باشه، قرار
نیست که از این کلاس که تو ماژول event هست استفاده کنیم. بلکه میخواهیم کلاسی بنویسیم که بتونه
سازوکاری شبیه EventEmitter اصلی را داشته باشه. کلاس شما باید حتما متدهای زیر را تو خودش داشته
باشه (بهتره هر کدوم از این متدها رو در EventEmitter اصلی بررسی کنید تا درک بهتری از پیاده سازی داشته
باشین)

- on(eventName, cb) => // Attach event listener (should call addListener). Alias for addListener!
- once(eventName, cb) => // Attach event handler only once. Automatically removed.
- addListener(eventName, cb)
- off(eventName, cb) => removeListener (should call removeListener). Alias for removeListener
- removeListener (eventName, cb)
- emit(eventName, ...args) => Fire the event
- listenerCount(eventName)
- rawListeners(eventName)
