      {
        title: "1. Хоёр тооны их",
        inputs: ["a", "b"],
        code: (a, b) => {
          if (a > b) return Их нь: {a};
          else if (b > a) return Их нь: {b};
          else return "Тэнцүү байна";
        }
      },
      {
        title: "2. Хоёр тооны бага",
        inputs: ["a", "b"],
        code: (a, b) => {
          if (a < b) return Бага нь: {a};
          else if (b < a) return Бага нь: {b};
          else return "Тэнцүү байна";
        }
      },
      {
        title: "3. Гурван тооны бага",
        inputs: ["a", "b", "c"],
        code: (a, b, c) => Бага нь: {Math.min(a, b, c)}
      },
      {
        title: "4. Гурван тооны их",
        inputs: ["a", "b", "c"],
        code: (a, b, c) => Их нь: {Math.max(a, b, c)}
      },
      {
        title: "5. Гурван тооны дундах",
        inputs: ["a", "b", "c"],
        code: (a, b, c) => {
          const arr = [a, b, c].sort((x, y) => x - y);
          return Дундах нь: {arr[1]};
        }
      },
      {
        title: "6. Гурван тооны дундаж",
        inputs: ["a", "b", "c"],
        code: (a, b, c) => Дундаж нь: {(a + b + c) / 3}
      },
      {
        title: "7. Эрэмбэ (хоёр тоо)",
        inputs: ["a", "b"],
        code: (a, b) => a > b ? {b}, {a} : {a}, {b}
      },
      {
        title: "8. Эрэмбэ 3 (гурван тоо)",
        inputs: ["a", "b", "c"],
        code: (a, b, c) => {
          const arr = [a, b, c].sort((x, y) => x - y);
          return Өсөхөөр: {arr.join(", ")};
        }
      },
      {
        title: "9. Анхны тоо мөн үү?",
        inputs: ["n"],
        code: 👎 => {
          if (n < 2) return "Анхны тоо биш";
          for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return "Анхны тоо биш";
          }
          return "Анхны тоо мөн";
        }
      },
      {
        title: "10. Палиндром тоо мөн үү?",
        inputs: ["n"],
        code: 👎 => {
          const s = String(n);
          return s === s.split('').reverse().join('') ? "Палиндром мөн" : "Палиндром биш";
        }
      },
      {
        title: "11. Палиндром анхны тоонууд",
        inputs: ["limit"],
        code: (limit) => {
          const isPrime = num => {
            if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
            return true;
          };
          const isPal = num => String(num) === String(num).split('').reverse().join('');
          const result = [];
          for (let i = 2; i <= limit; i++) {
            if (isPrime(i) && isPal(i)) result.push(i);
          }
          return result.length ? result.join(", ") : "Ийм тоо байхгүй";
        }
  

  
