"use strict";

const cards = [
  {
    "id": "OW-C01",
    "tier": "C",
    "en": "Open the Shutters",
    "th": "เปิดหน้าต่างรับเช้า",
    "story": "นกฮูกเปิดบานไม้รับเช้าวันสุดท้ายของปี",
    "wishEn": "May every morning give you a reason to smile.",
    "wishTh": "ขอให้ทุกเช้ามีเรื่องให้ยิ้ม",
    "image": "OW-C01-Open-the-Shutters.webp"
  },
  {
    "id": "OW-C02",
    "tier": "C",
    "en": "One Last Sweep",
    "th": "กวาดบ้านส่งท้ายปี",
    "story": "นกฮูกกวาดใบไม้หน้าบ้านแล้วพบกระดุมดาวที่เคยทำหาย",
    "wishEn": "May you rediscover something good you thought you’d lost.",
    "wishTh": "ขอให้ได้พบสิ่งดีที่คิดว่าหายไป",
    "image": "OW-C02-One-Last-Sweep.webp"
  },
  {
    "id": "OW-C03",
    "tier": "C",
    "en": "Last Page Plane",
    "th": "เครื่องบินจากปฏิทินแผ่นสุดท้าย",
    "story": "นกฮูกพับปฏิทินแผ่นสุดท้ายเป็นเครื่องบินกระดาษ ส่งข้ามหน้าต่างไปหาเพื่อน",
    "wishEn": "May you have the courage to send your dreams into the world.",
    "wishTh": "ขอให้กล้าส่งความฝันออกเดินทาง",
    "image": "OW-C03-Last-Page-Plane.webp"
  },
  {
    "id": "OW-C04",
    "tier": "C",
    "en": "Lantern Polish",
    "th": "ขัดโคมให้ใส",
    "story": "นกฮูกเช็ดกระจกโคมจนใส แล้วลองทำหน้าขึงขังใส่เงาตัวเอง",
    "wishEn": "May you see the light in yourself.",
    "wishTh": "ขอให้มองเห็นความสดใสในตัวเอง",
    "image": "OW-C04-Lantern-Polish.webp"
  },
  {
    "id": "OW-C05",
    "tier": "C",
    "en": "Tangerine Tower",
    "th": "หอคอยส้ม",
    "story": "กองส้มบนโต๊ะลงทะเบียนเริ่มเอียง ทุกคนยื่นมือมาช่วยก่อนลูกบนสุดจะกลิ้ง",
    "wishEn": "May someone be there to steady you when things start to wobble.",
    "wishTh": "ขอให้มีคนช่วยรับในวันที่อะไร ๆ เอียง",
    "image": "OW-C05-Tangerine-Tower.webp"
  },
  {
    "id": "OW-C06",
    "tier": "C",
    "en": "Ribbon Tangle",
    "th": "ริบบิ้นพันปีก",
    "story": "นกฮูกดึงริบบิ้นยาวจนพันปีก เพื่อนช่วยแก้แล้วผูกปลายเป็นโบ",
    "wishEn": "May life’s little tangles come undone.",
    "wishTh": "ขอให้เรื่องยุ่งคลี่คลายง่ายขึ้น",
    "image": "OW-C06-Ribbon-Tangle.webp"
  },
  {
    "id": "OW-C07",
    "tier": "C",
    "en": "Soup for Two",
    "th": "ซุปร้อนสำหรับสองคน",
    "story": "นกฮูกตักซุปร้อนให้คนเฝ้าประตู ก่อนกลับไปช่วยเตรียมงาน",
    "wishEn": "May you find a little warmth at the end of a long day.",
    "wishTh": "ขอให้มีความอบอุ่นในวันที่เหนื่อย",
    "image": "OW-C07-Soup-for-Two.webp"
  },
  {
    "id": "OW-C08",
    "tier": "C",
    "en": "Flour Footprints",
    "th": "รอยเท้าแป้ง",
    "story": "นกฮูกย่ำแป้งโดยไม่รู้ตัว ทิ้งรอยเท้าจากครัวไปถึงหน้าร้าน",
    "wishEn": "May your clumsiest moments become your funniest stories.",
    "wishTh": "ขอให้เรื่องเปิ่น ๆ กลายเป็นเรื่องขำ",
    "image": "OW-C08-Flour-Footprints.webp"
  },
  {
    "id": "OW-C09",
    "tier": "C",
    "en": "The Spare Button",
    "th": "กระดุมสำรอง",
    "story": "นกฮูกเย็บกระดุมดาวที่เก็บได้ลงบนเสื้อคลุมตัวโปรด",
    "wishEn": "May the things you treasure stay with you for years to come.",
    "wishTh": "ขอให้ของรักอยู่กับเราไปอีกนาน",
    "image": "OW-C09-The-Spare-Button.webp"
  },
  {
    "id": "OW-C10",
    "tier": "C",
    "en": "Window Stars",
    "th": "ดาวบนกระจก",
    "story": "นกฮูกติดดาวกระดาษที่หน้าต่าง เด็กที่เดินผ่านชี้ดาวดวงเล็กที่สุดให้เพื่อนดู",
    "wishEn": "May little things fill your heart with joy.",
    "wishTh": "ขอให้เรื่องเล็ก ๆ ทำให้ใจพองโต",
    "image": "OW-C10-Window-Stars.webp"
  },
  {
    "id": "OW-C11",
    "tier": "C",
    "en": "Chalk Arrows",
    "th": "ลูกศรชอล์ก",
    "story": "นกฮูกวาดลูกศรจากสถานีไปลานงาน แล้วเติมรอยเท้านกฮูกกำกับ",
    "wishEn": "May you find a path that feels like yours.",
    "wishTh": "ขอให้เจอทางที่เหมาะกับตัวเอง",
    "image": "OW-C11-Chalk-Arrows.webp"
  },
  {
    "id": "OW-C12",
    "tier": "C",
    "en": "Market Change",
    "th": "เหรียญกลิ้งกลางตลาด",
    "story": "เหรียญหลุดจากปีก กลิ้งผ่านพื้นตลาดไปหยุดข้างตาชั่งพอดี",
    "wishEn": "May a little chance bring something good your way.",
    "wishTh": "ขอให้เหตุบังเอิญพาเรื่องดีมาให้",
    "image": "OW-C12-Market-Change.webp"
  },
  {
    "id": "OW-C13",
    "tier": "C",
    "en": "Gift Tag Mix-Up",
    "th": "สลับป้ายของขวัญ",
    "story": "นกฮูกสลับป้ายจนคุณตาได้ตุ๊กตาเป็ด เปิดกล่องแล้วหัวเราะชอบใจ",
    "wishEn": "May joy surprise you in the best ways.",
    "wishTh": "ขอให้ได้เจอความสุขที่มาเกินคาด",
    "image": "OW-C13-Gift-Tag-Mix-Up.webp"
  },
  {
    "id": "OW-C14",
    "tier": "C",
    "en": "Paper Chain",
    "th": "สายห่วงกระดาษ",
    "story": "ชาวร้านรวงต่อห่วงกระดาษคนละห่วงจนยาวพอแขวนข้ามซอย",
    "wishEn": "May what you make together go further than you imagined.",
    "wishTh": "ขอให้สิ่งที่ลงมือด้วยกันไปได้ไกล",
    "image": "OW-C14-Paper-Chain.webp"
  },
  {
    "id": "OW-C15",
    "tier": "C",
    "en": "Pocket Seeds",
    "th": "เมล็ดพันธุ์ในกระเป๋า",
    "story": "นกฮูกห่อเมล็ดดอกไม้ให้เพื่อนเก็บไว้ปลูกในวันแรกของปี",
    "wishEn": "May what you plant today grow in its own time.",
    "wishTh": "ขอให้สิ่งที่เริ่มวันนี้ค่อย ๆ เติบโต",
    "image": "OW-C15-Pocket-Seeds.webp"
  },
  {
    "id": "OW-C16",
    "tier": "C",
    "en": "Reserved for You",
    "th": "ที่นั่งที่เก็บไว้ให้",
    "story": "นกฮูกวางผ้าพันคอบนเก้าอี้ให้เพื่อนที่ยังมาไม่ถึง",
    "wishEn": "May there always be a place saved for you.",
    "wishTh": "ขอให้มีที่ของเราเสมอ",
    "image": "OW-C16-Reserved-for-You.webp"
  },
  {
    "id": "OW-C17",
    "tier": "C",
    "en": "Dinner Crossing",
    "th": "หอบมื้อเย็นข้ามทางหิน",
    "story": "นกฮูกหิ้วตะกร้าอาหารข้ามทางหิน ใช้ปลายปีกกดฝาไว้ตอนลมพัด",
    "wishEn": "May you share good food with the people you’ve missed.",
    "wishTh": "ขอให้ได้แบ่งมื้ออร่อยกับคนที่คิดถึง",
    "image": "OW-C17-Dinner-Crossing.webp"
  },
  {
    "id": "OW-C18",
    "tier": "C",
    "en": "Out of Frame",
    "th": "หลุดเฟรมไปครึ่งหน้า",
    "story": "ทุกคนตั้งท่าถ่ายรูปหมู่ แต่นกฮูกเพิ่งวิ่งเข้ามาทันแค่ครึ่งหน้า",
    "wishEn": "May your favorite photos make you laugh all over again.",
    "wishTh": "ขอให้มีภาพที่เห็นแล้วอยากหัวเราะอีก",
    "image": "OW-C18-Out-of-Frame.webp"
  },
  {
    "id": "OW-C19",
    "tier": "C",
    "en": "Wish Window",
    "th": "หน้าต่างฝากคำอวยพร",
    "story": "นกฮูกแปะซองบนกระจกให้คนเดินผ่านฝากคำอวยพร",
    "wishEn": "May your kind words reach someone who needs them.",
    "wishTh": "ขอให้คำพูดดี ๆ ไปถึงคนที่ต้องการ",
    "image": "OW-C19-Wish-Window.webp"
  },
  {
    "id": "OW-C20",
    "tier": "C",
    "en": "A Quiet Bench",
    "th": "ม้านั่งพักใจ",
    "story": "นกฮูกนั่งพักหลังยกของ มองเงาปีกบนม้านั่งค่อย ๆ ยาวขึ้น",
    "wishEn": "May you have a quiet moment to rest and breathe.",
    "wishTh": "ขอให้มีเวลาพักอย่างสบายใจ",
    "image": "OW-C20-A-Quiet-Bench.webp"
  },
  {
    "id": "OW-C21",
    "tier": "C",
    "en": "Welcome Mat",
    "th": "พรมต้อนรับ",
    "story": "นกฮูกคลี่พรมหน้าลานงาน แล้วใช้หินรูปหัวใจทับมุมที่ม้วนขึ้น",
    "wishEn": "May a warm welcome meet you wherever you arrive.",
    "wishTh": "ขอให้ทุกการมาถึงมีคนต้อนรับ",
    "image": "OW-C21-Welcome-Mat.webp"
  },
  {
    "id": "OW-C22",
    "tier": "C",
    "en": "Patchwork Flag",
    "th": "ธงปะของทั้งซอย",
    "story": "ชาวเมืองใช้เศษผ้าจากหลายบ้านปะธงที่ขาด ก่อนชักขึ้นหน้าลาน",
    "wishEn": "May the parts you’ve mended become the parts you love most.",
    "wishTh": "ขอให้รอยซ่อมกลายเป็นส่วนที่เรารัก",
    "image": "OW-C22-Patchwork-Flag.webp"
  },
  {
    "id": "OW-C23",
    "tier": "C",
    "en": "Sweets on a String",
    "th": "ถุงขนมบนสายเชือก",
    "story": "นกฮูกย้ายสายแขวนถุงขนมลงมาให้เด็กตัวเล็กเอื้อมถึง",
    "wishEn": "May a little happiness always be within reach.",
    "wishTh": "ขอให้ความสุขอยู่ใกล้มือ",
    "image": "OW-C23-Sweets-on-a-String.webp"
  },
  {
    "id": "OW-C24",
    "tier": "C",
    "en": "First Footsteps",
    "th": "ก้าวแรกเข้างาน",
    "story": "นกฮูกเห็นเด็กคนแรกเดินตามลูกศรเข้ามา จึงพลิกป้ายเปิดงาน",
    "wishEn": "May your first step lead to something fun.",
    "wishTh": "ขอให้ก้าวแรกพาไปเจอเรื่องสนุก",
    "image": "OW-C24-First-Footsteps.webp"
  },
  {
    "id": "OW-C25",
    "tier": "C",
    "en": "Festival Doors",
    "th": "ประตูสู่เทศกาล",
    "story": "ประตูงานเปิดให้เห็นถนนโคมไฟทั้งสาย เหนือเมืองคือหอนาฬิกาที่รอจุดดาว",
    "wishEn": "May every new door open to something good.",
    "wishTh": "ขอให้ประตูบานใหม่เปิดรับเรื่องดี ๆ",
    "image": "OW-C25-Festival-Doors.webp"
  },
  {
    "id": "OW-U01",
    "tier": "U",
    "en": "Lantern Lane",
    "th": "ซอยโคมไฟ",
    "story": "นกฮูกเดินลอดซุ้มขณะที่โคมติดสว่างต่อกันทีละดวง",
    "wishEn": "May you find a light to guide you on the darkest nights.",
    "wishTh": "ขอให้มีแสงนำทางในคืนที่มืด",
    "image": "OW-U01-Lantern-Lane.webp"
  },
  {
    "id": "OW-U02",
    "tier": "U",
    "en": "Drumbeat Turn",
    "th": "หมุนตามเสียงกลอง",
    "story": "นกฮูกเผลอเต้นตามจังหวะกลอง จนคนสองข้างถนนขยับเท้าตาม",
    "wishEn": "May you find your own rhythm this year.",
    "wishTh": "ขอให้ปีนี้เจอจังหวะที่เป็นของตัวเอง",
    "image": "OW-U02-Drumbeat-Turn.webp"
  },
  {
    "id": "OW-U03",
    "tier": "U",
    "en": "Ring Toss Relay",
    "th": "ส่งห่วงให้ลองใหม่",
    "story": "เด็กโยนห่วงพลาด นกฮูกใช้ปีกเกี่ยวห่วงที่กำลังกลิ้งมาส่งให้ลองอีกครั้ง",
    "wishEn": "May you always get another chance to try.",
    "wishTh": "ขอให้มีโอกาสลองใหม่อีกครั้ง",
    "image": "OW-U03-Ring-Toss-Relay.webp"
  },
  {
    "id": "OW-U04",
    "tier": "U",
    "en": "Bubble Parade",
    "th": "ขบวนฟองสบู่",
    "story": "ฟองสบู่ลอยตัดขบวนพาเหรด เผยเงานักดนตรีกลับหัวอยู่ข้างใน",
    "wishEn": "May familiar places still have surprises in store for you.",
    "wishTh": "ขอให้โลกเดิมยังมีมุมให้ประหลาดใจ",
    "image": "OW-U04-Bubble-Parade.webp"
  },
  {
    "id": "OW-U05",
    "tier": "U",
    "en": "Mask Exchange",
    "th": "แลกหน้ากากทายตัว",
    "story": "นกฮูกแลกหน้ากากกับเพื่อน แล้วทำท่าทางให้คนรอบข้างทายว่าใครเป็นใคร",
    "wishEn": "May you have days when you can play to your heart’s content.",
    "wishTh": "ขอให้มีวันได้เล่นสนุกเต็มที่",
    "image": "OW-U05-Mask-Exchange.webp"
  },
  {
    "id": "OW-U06",
    "tier": "U",
    "en": "Shadow Stage",
    "th": "เงาปีกบนเวที",
    "story": "นกฮูกเผลอเดินตัดโคมไฟโรงละคร เงาปีกจึงกลายเป็นส่วนหนึ่งของฉาก",
    "wishEn": "May a happy accident lead you to a new idea.",
    "wishTh": "ขอให้ความผิดพลาดพาไปเจอไอเดียใหม่",
    "image": "OW-U06-Shadow-Stage.webp"
  },
  {
    "id": "OW-U07",
    "tier": "U",
    "en": "Puddle Waltz",
    "th": "วอลซ์หลบแอ่งน้ำ",
    "story": "นกฮูกพาเด็กก้าวหมุนตามเสียงเพลงเพื่อหลบแอ่งน้ำ",
    "wishEn": "May you dance your way through the little stumbles.",
    "wishTh": "ขอให้ก้าวผ่านวันสะดุดไปได้อย่างสนุก",
    "image": "OW-U07-Puddle-Waltz.webp"
  },
  {
    "id": "OW-U08",
    "tier": "U",
    "en": "Rooftop Seat",
    "th": "ที่นั่งบนหลังคา",
    "story": "นกฮูกพาเพื่อนตัวเล็กที่มองไม่เห็นขบวนขึ้นไปนั่งดูจากหลังคา",
    "wishEn": "May you finally see the view you’ve been waiting for.",
    "wishTh": "ขอให้ได้เห็นวิวที่เฝ้ารอมานาน",
    "image": "OW-U08-Rooftop-Seat.webp"
  },
  {
    "id": "OW-U09",
    "tier": "U",
    "en": "Ribbon Runaway",
    "th": "ริบบิ้นปลิวขึ้นหอ",
    "story": "ลมหอบริบบิ้นไปพันเสาหอนาฬิกา นกฮูกขึ้นไปแกะแล้วเห็นฝาครอบยอดหอแง้มอยู่",
    "wishEn": "May your curiosity lead you to the answers you seek.",
    "wishTh": "ขอให้ความช่างสังเกตพาไปพบคำตอบ",
    "image": "OW-U09-Ribbon-Runaway.webp"
  },
  {
    "id": "OW-U10",
    "tier": "U",
    "en": "A Seat for the Band",
    "th": "ที่นั่งของวงดนตรี",
    "story": "นักดนตรีมาถึงช้า คนรอบเวทีช่วยกันขยับที่และยกม้านั่งมาให้",
    "wishEn": "May you find people who gladly make room for you.",
    "wishTh": "ขอให้พบผู้คนที่พร้อมเปิดพื้นที่ให้เรา",
    "image": "OW-U10-A-Seat-for-the-Band.webp"
  },
  {
    "id": "OW-U11",
    "tier": "U",
    "en": "Empty Crown",
    "th": "ยอดหอไร้ดาว",
    "story": "นกฮูกส่องกล้องประจำลานขึ้นไป เห็นเบ้าดาวบนยอดหอว่างเปล่า",
    "wishEn": "May you keep looking for what matters most to you.",
    "wishTh": "ขอให้ยังมีใจตามหาสิ่งสำคัญ",
    "image": "OW-U11-Empty-Crown.webp"
  },
  {
    "id": "OW-U12",
    "tier": "U",
    "en": "Turn the Lanterns",
    "th": "หันโคมช่วยกันหา",
    "story": "นกฮูกขอให้แต่ละร้านหันโคมเข้าตรอกเพื่อช่วยมองหาร่องรอย",
    "wishEn": "May someone light the way when you can’t see ahead.",
    "wishTh": "ขอให้มีคนช่วยส่องทางเมื่อเรามองไม่เห็น",
    "image": "OW-U12-Turn-the-Lanterns.webp"
  },
  {
    "id": "OW-U13",
    "tier": "U",
    "en": "The Silver Feather",
    "th": "ขนนกประกายเงิน",
    "story": "นกฮูกพบขนของตัวเองบนชายคา มีเกล็ดเงินติดจากจุดที่ดาวครูดผ่าน",
    "wishEn": "May the smallest clues point you in the right direction.",
    "wishTh": "ขอให้สัญญาณเล็ก ๆ พาไปถูกทาง",
    "image": "OW-U13-The-Silver-Feather.webp"
  },
  {
    "id": "OW-U14",
    "tier": "U",
    "en": "Midnight Post",
    "th": "จดหมายก่อนเที่ยงคืน",
    "story": "คนส่งจดหมายฝากซองคำอวยพรไว้ที่หอ แล้วชี้ว่าประกายสุดท้ายตกไปทางแม่น้ำ",
    "wishEn": "May good news find you right on time.",
    "wishTh": "ขอให้ข่าวดีเดินทางมาถึงทันเวลา",
    "image": "OW-U14-Midnight-Post.webp"
  },
  {
    "id": "OW-U15",
    "tier": "U",
    "en": "Light Under the Bridge",
    "th": "แสงใต้สะพาน",
    "story": "นกฮูกมองจากสะพานคนเดิน เห็นแสงกะพริบอยู่ใต้สะพานหินอีกฝั่ง",
    "wishEn": "May you find hope in even the faintest glow.",
    "wishTh": "ขอให้ยังเห็นความหวังแม้แสงจะริบหรี่",
    "image": "OW-U15-Light-Under-the-Bridge.webp"
  },
  {
    "id": "OW-R01",
    "tier": "R",
    "en": "Silver Trail",
    "th": "ตามรอยประกายเงิน",
    "story": "นกฮูกกางแผนที่ เทียบรอยประกายจากหลังคาหอไปจนถึงสะพานหิน",
    "wishEn": "May the scattered pieces slowly come together.",
    "wishTh": "ขอให้สิ่งที่เคยสับสนค่อย ๆ ต่อกันเป็นภาพ",
    "image": "OW-R01-Silver-Trail.webp"
  },
  {
    "id": "OW-R02",
    "tier": "R",
    "en": "Against the Gust",
    "th": "โฉบฝ่าลม",
    "story": "นกฮูกบินลงหาแม่น้ำ ถูกลมตีปีกจนเสียหลัก ก่อนโฉบลอดธงกลับเข้าทาง",
    "wishEn": "May you find your balance when the winds pick up.",
    "wishTh": "ขอให้ตั้งหลักได้แม้เจอลมแรง",
    "image": "OW-R02-Against-the-Gust.webp"
  },
  {
    "id": "OW-R03",
    "tier": "R",
    "en": "River Mirror",
    "th": "กระจกแห่งสายน้ำ",
    "story": "ตอม่อบังดาวไว้ นกฮูกเปลี่ยนมุมมองจนเห็นเงาดาวในน้ำและเจอทางลอด",
    "wishEn": "May a fresh perspective show you a way through.",
    "wishTh": "ขอให้มุมมองใหม่ช่วยให้เห็นทางออก",
    "image": "OW-R03-River-Mirror.webp"
  },
  {
    "id": "OW-R04",
    "tier": "R",
    "en": "Star in the Roots",
    "th": "ดาวติดรากไม้",
    "story": "นกฮูกคลี่ปีกบังละอองน้ำ แล้วค่อย ๆ ดึงดาวที่ติดรากไม้ใต้สะพานออกมา",
    "wishEn": "May you hold on to what matters through the hardest days.",
    "wishTh": "ขอให้รักษาสิ่งสำคัญไว้ได้ในวันที่ยาก",
    "image": "OW-R04-Star-in-the-Roots.webp"
  },
  {
    "id": "OW-R05",
    "tier": "R",
    "en": "Homeward Lights",
    "th": "แสงโคมพากลับบ้าน",
    "story": "นกฮูกอุ้มดาวบินกลับเมือง ตามโคมที่คนสองฝั่งแม่น้ำชูขึ้นพร้อมกัน",
    "wishEn": "May a light guide you home to those waiting for you.",
    "wishTh": "ขอให้มีแสงพากลับไปหาคนที่รออยู่",
    "image": "OW-R05-Homeward-Lights.webp"
  },
  {
    "id": "OW-SR01",
    "tier": "SR",
    "en": "Tower Ascent",
    "th": "ไต่สู่ยอดหอ",
    "story": "มุมเงยจากลานเห็นนกฮูกหนีบดาวไว้กับอก ไต่ผนังหอฝ่าลมจนปลายปีกล้ำกรอบช่อง",
    "wishEn": "May you find the strength for that final step.",
    "wishTh": "ขอให้มีกำลังไปถึงก้าวสุดท้าย",
    "image": "OW-SR01-Tower-Ascent.webp"
  },
  {
    "id": "OW-SR02",
    "tier": "SR",
    "en": "A Hundred Little Lights",
    "th": "แสงดวงน้อยนับร้อย",
    "story": "ดาวกลับเข้าที่แต่ยังมืด ทุกคนจึงยกโคมให้แสงจากทั้งลานมาบรรจบที่ยอดหอ",
    "wishEn": "May our little lights shine far when we bring them together.",
    "wishTh": "ขอให้แสงเล็ก ๆ ของเราช่วยกันส่องได้ไกล",
    "image": "OW-SR02-A-Hundred-Little-Lights.webp"
  },
  {
    "id": "OW-SR03",
    "tier": "SR",
    "en": "One Second Left",
    "th": "หนึ่งวินาทีสุดท้าย",
    "story": "ระฆังเริ่มแกว่ง ช่องเล็กจับแววตานกฮูก เข็มวินาที และปีกที่ยังประคองดาว",
    "wishEn": "May you find the courage to begin when your moment comes.",
    "wishTh": "ขอให้กล้าเริ่มเมื่อถึงเวลาของเรา",
    "image": "OW-SR03-One-Second-Left.webp"
  },
  {
    "id": "OW-SEC01",
    "tier": "SEC",
    "en": "Midnight Wings",
    "th": "ปีกแห่งเที่ยงคืน",
    "story": "ระฆังดัง ดาวสว่างเป็นปีกขนาดใหญ่เหนือเมือง ภายในขนปีกมีช่องเล็กซ่อนซองคำอวยพรจากชาวเมือง",
    "wishEn": "May someone’s wish for you light up your whole year.",
    "wishTh": "ขอให้คำอวยพรจากใครสักคนเป็นแสงให้คุณตลอดปี",
    "image": "OW-SEC01-Midnight-Wings.webp"
  },
  {
    "id": "OW-SEC02",
    "tier": "SEC",
    "en": "The First Dawn",
    "th": "รุ่งอรุณแรกของปี",
    "story": "นกฮูกเปิดบานไม้บานเดิมจาก C01 แสงเช้าเผยเงาดาวบนหน้าต่างทุกบ้าน ช่องเล็กในลำแสงเห็นเพื่อนบ้านเปิดประตูทักกัน",
    "wishEn": "May the new year bring mornings you can’t wait to wake up to.",
    "wishTh": "ขอให้ปีใหม่มีเช้าที่เราอยากลุกขึ้นมาเจอ",
    "image": "OW-SEC02-The-First-Dawn.webp"
  },
  {
    "id": "OW-G01",
    "tier": "G",
    "en": "Fox at the Gate",
    "th": "จิ้งจอกที่ประตูสถานี",
    "story": "จิ้งจอกนายสถานีช่วยนกฮูกพาแขกจากรถเที่ยวสุดท้ายมาถึงงานทันเวลา",
    "wishEn": "May every journey bring you closer to someone you long to see.",
    "wishTh": "ขอให้ทุกการเดินทางพาเราไปถึงคนที่อยากเจอ",
    "image": "OW-G01-Fox-at-the-Gate.webp"
  },
  {
    "id": "OW-G02",
    "tier": "G",
    "en": "Rabbit’s Lucky Batch",
    "th": "คุกกี้นำโชคของกระต่าย",
    "story": "กระต่ายอบคุกกี้ติดกันสองชิ้น พอแบ่งกับนกฮูกก็เห็นรูปหัวใจพอดี",
    "wishEn": "May good fortune leave you with enough to share.",
    "wishTh": "ขอให้โชคดีพอจะแบ่งให้ใครอีกคน",
    "image": "OW-G02-Rabbits-Lucky-Batch.webp"
  },
  {
    "id": "OW-G03",
    "tier": "G",
    "en": "Stitches for Winter",
    "th": "ฝีเข็มรับหน้าหนาว",
    "story": "เม่นช่างเย็บเสื้อให้นกฮูกช่วยวัดแขนเสื้อเด็ก แล้วพับชายไว้เผื่อโต",
    "wishEn": "May you have plenty of room to grow at your own pace.",
    "wishTh": "ขอให้มีพื้นที่เติบโตอย่างสบายใจ",
    "image": "OW-G03-Stitches-for-Winter.webp"
  },
  {
    "id": "OW-G04",
    "tier": "G",
    "en": "One More Letter",
    "th": "จดหมายอีกฉบับ",
    "story": "หมีบุรุษไปรษณีย์เจอซองที่ไม่มีเลขบ้าน นกฮูกจำรูปบนซองได้จึงพาไปส่งฟากตลาด",
    "wishEn": "May the people you miss know you’re thinking of them.",
    "wishTh": "ขอให้ความคิดถึงเดินทางถึงปลายทาง",
    "image": "OW-G04-One-More-Letter.webp"
  },
  {
    "id": "OW-G05",
    "tier": "G",
    "en": "The Cat’s Encore",
    "th": "เพลงแถมของเจ้าแมว",
    "story": "แมวนักไวโอลินเล่นเพลงแถมให้คนเก็บร้าน นกฮูกช่วยถือโคมส่องข้างเวที",
    "wishEn": "May your favorite song keep you company on tiring days.",
    "wishTh": "ขอให้ยังมีเพลงโปรดในวันที่เหนื่อย",
    "image": "OW-G05-The-Cats-Encore.webp"
  },
  {
    "id": "OW-G06",
    "tier": "G",
    "en": "Deer in the Snow Globe",
    "th": "กวางกับลูกแก้วหิมะ",
    "story": "กวางช่างทำของเล่นให้นกฮูกเขย่าลูกแก้ว ทั้งคู่เห็นเมืองจิ๋วข้างในเหมือนลานตรงหน้า",
    "wishEn": "May the things you loved as a child still fill you with wonder.",
    "wishTh": "ขอให้ยังตื่นเต้นกับสิ่งที่เคยรักตอนเด็ก",
    "image": "OW-G06-Deer-in-the-Snow-Globe.webp"
  },
  {
    "id": "OW-G07",
    "tier": "G",
    "en": "Otter’s Paper Fleet",
    "th": "กองเรือกระดาษของนาก",
    "story": "นากกับนกฮูกปล่อยเรือกระดาษลงรางน้ำจำลอง เด็ก ๆ วิ่งเชียร์สองฝั่ง",
    "wishEn": "May you try something new with friends cheering you on.",
    "wishTh": "ขอให้ได้ลองสิ่งใหม่กับเพื่อนที่เชียร์เรา",
    "image": "OW-G07-Otters-Paper-Fleet.webp"
  },
  {
    "id": "OW-G08",
    "tier": "G",
    "en": "Tortoise Takes the Floor",
    "th": "เมื่อเต่าลงฟลอร์",
    "story": "เต่าก้าวลงลานช้ากว่าคนอื่น นกฮูกกับเพื่อนจึงหันมาเต้นตามจังหวะของเต่า",
    "wishEn": "May you find people who are happy to walk beside you at your pace.",
    "wishTh": "ขอให้มีคนที่ยินดีเดินไปด้วยกันในจังหวะของเรา",
    "image": "OW-G08-Tortoise-Takes-the-Floor.webp"
  },
  {
    "id": "OW-G09",
    "tier": "G",
    "en": "Crane’s Long Banner",
    "th": "ป้ายผืนยาวของนกกระเรียน",
    "story": "นกกระเรียนเขียนชื่อร้านบนผืนผ้า นกฮูกช่วยจับปลายที่ลมพัดจนตึงสุดแขน",
    "wishEn": "May the work you put your heart into be seen.",
    "wishTh": "ขอให้ผลงานที่ตั้งใจได้ออกไปให้คนเห็น",
    "image": "OW-G09-Cranes-Long-Banner.webp"
  },
  {
    "id": "OW-G10",
    "tier": "G",
    "en": "Raccoon’s Last Cart",
    "th": "รถเข็นเที่ยวสุดท้ายของแร็กคูน",
    "story": "แร็กคูนเข็นรถเก็บของหลังงานเลิก นกฮูกเจอถุงขนมใบสุดท้ายแล้วแบ่งกันกินบนขั้นบันได",
    "wishEn": "May the day end with one more reason to smile.",
    "wishTh": "ขอให้ตอนจบของวันยังมีเรื่องให้ยิ้ม",
    "image": "OW-G10-Raccoons-Last-Cart.webp"
  }
];
