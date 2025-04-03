# SQL amaliyot
## ✅ 1-Mashq: 2013-yilda konsert bo‘lgan shaharda tashkil topgan orkestralarni topish

### 🎯 Vazifa:
Shunday orkestralarni topingki, ular o‘sha shaharda tashkil topgan bo‘lsin, qayerda 2013-yilda konsert bo‘lgan.

### 📦 Jadval tuzilmalari:

**`orchestras`**:
```sql
id             -- unikal ID
name           -- orkestraning nomi
city_origin    -- tashkil topgan shahri
```

**`concerts`**:
```sql
id
city           -- konsert o‘tgan shahri
year           -- konsert yili
```

### 🧠 Mantiq:
1. `concerts` jadvalidan 2013-yilda konsert bo‘lgan shaharlarni olish.
2. `orchestras` jadvalidan tashkil topgan shahri yuqoridagi ro‘yxatdagi shaharlar bilan mos tushadiganlarni tanlash.

### 💻 Kod:
```sql

```

---

## ✅ 2-Mashq: 10+ yillik tajribaga ega, reytingi 8 dan past orkestralarda ishlamaydigan a'zolar

### 🎯 Vazifa:
Tajriba > 10 bo‘lgan, lekin reytingi 8 dan past orkestralarga tegishli bo‘lmagan a’zolarni chiqaring.

### 📦 Jadval tuzilmalari:

**`members`**:
```sql
id
name
position        -- o‘ynaydigan asbobi
experience      -- yillik tajriba
orchestra_id    -- qaysi orkestraga tegishli
```

**`orchestras`**:
```sql
id
rating
```

### 💻 Kod:
```sql

```

---

## ✅ 3-Mashq: O‘rtacha violin maoshidan ko‘p oladigan a’zolar

### 🎯 Vazifa:
Skripkachilar (violinchilar) o‘rtacha maoshidan ko‘proq oladigan a’zolarni chiqaring.

### 📦 Jadval:
**`members`**
```sql
id
name
position       -- 'violin' bo'lishi mumkin
wage           -- oylik
```

### 💻 Kod:
```sql

```

---

## ✅ 4-Mashq: “Chamber Orchestra”dan keyin ochilgan, reytingi 7.5+ bo‘lgan orkestralar

### 🎯 Vazifa:
“Chamber Orchestra”dan keyin tashkil topgan va reytingi 7.5 dan yuqori bo‘lgan orkestralarni chiqaring.

### 📦 Jadval:
**`orchestras`**
```sql
name
year
rating
```

### 💻 Kod:
```sql

```

---

## ✅ 5-Mashq: O‘rtacha a’zolar sonidan ko‘p a’zosi bor orkestralar

### 🎯 Vazifa:
Har bir orkestraning a’zolari sonini sanab, o‘rtacha a’zolar sonidan ko‘p bo‘lganlarni tanlang.

### 📦 Jadval:

**`orchestras`**:
```sql
id
name
```

**`members`**:
```sql
orchestra_id
id  -- a'zo ID, sanash uchun kerak
```

### 💻 Kod:
```sql

```

### 🧠 Izoh:
- Ichki subquery har bir orkestraning a’zolari sonini hisoblaydi.
- Keyingi subquery o‘rtacha a’zolar sonini topadi.
- HAVING orqali faqat o‘rtacha sonidan ko‘p bo‘lganlar tanlanadi.

---
