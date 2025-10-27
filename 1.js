<!DOCTYPE html>
<html lang="mn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>11 JS Бодлого (Promptгүй)</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center p-6">
  <h1 class="text-3xl font-bold mb-6 text-blue-400">11 JS Бодлого (Promptгүй)</h1>
  <div id="container" class="space-y-6 w-full max-w-3xl"></div>

  <script>
    const problems = [
      {
        title: "1. Хоёр тооны их",
        inputs: ["a", "b"],
        code: (a, b) => {
          if (a > b) return Их нь: ${a};
          else if (b > a) return Их нь: ${b};
          else return "Тэнцүү байна";
        }
      },
      {
        title: "2. Хоёр тооны бага",
        inputs: ["a", "b"],
        code: (a, b) => {
          if (a < b) return Бага нь: ${a};
          else if (b < a) return Бага нь: ${b};
          else return "Тэнцүү байна";
        }
      },
      {
        title: "3. Гурван тооны бага",
        inputs: ["a", "b", "c"],
        code: (a, b, c) => Бага нь: ${Math.min(a, b, c)}
      },
      {
        title: "4. Гурван тооны их",
        inputs: ["a", "b", "c"],
        code: (a, b, c) => Их нь: ${Math.max(a, b, c)}
      },
      {
        title: "5. Гурван тооны дундах",
        inputs: ["a", "b", "c"],
        code: (a, b, c) => {
          const arr = [a, b, c].sort((x, y) => x - y);
          return Дундах нь: ${arr[1]};
        }
      },
      {
        title: "6. Гурван тооны дундаж",
        inputs: ["a", "b", "c"],
        code: (a, b, c) => Дундаж нь: ${(a + b + c) / 3}
      },
      {
        title: "7. Эрэмбэ (хоёр тоо)",
        inputs: ["a", "b"],
        code: (a, b) => a > b ? ${b}, ${a} : ${a}, ${b}
      },
      {
        title: "8. Эрэмбэ 3 (гурван тоо)",
        inputs: ["a", "b", "c"],
        code: (a, b, c) => {
          const arr = [a, b, c].sort((x, y) => x - y);
          return Өсөхөөр: ${arr.join(", ")};
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
      },
    ];

    const container = document.getElementById("container");

    problems.forEach((p, index) => {
      const card = document.createElement("div");
      card.className = "bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700";

      // input fields dynamically
      let inputHTML = p.inputs.map(v =>
        <input type="number" placeholder="${v}" class="input${index} bg-gray-900 border border-gray-700 rounded-md px-2 py-1 w-20 text-center">
      ).join(" ");

      card.innerHTML = `
        <h2 class="text-xl font-semibold text-blue-300 mb-2">${p.title}</h2>
        <div class="flex flex-wrap gap-2 mb-3">${inputHTML}</div>
        <div class="flex gap-3">
          <button class="run bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md">Run</button>
          <button class="clear bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md">Clear</button>
        </div>
        <pre id="output${index}" class="bg-black text-white mt-3 p-2 rounded-md h-24 overflow-auto"></pre>
      `;

      container.appendChild(card);

      const output = card.querySelector(#output${index});
      const runBtn = card.querySelector(".run");
      const clearBtn = card.querySelector(".clear");
      const inputs = [...card.querySelectorAll(.input${index})];

      runBtn.addEventListener("click", () => {
        const values = inputs.map(inp => Number(inp.value));
        if (values.some(v => isNaN(v))) {
          output.textContent = "⚠️ Тоон утгуудыг оруулна уу!";
          return;
        }
        try {
          const result = p.code(...values);
          output.textContent = String(result);
        } catch (e) {
          output.textContent = "⚠️ Алдаа: " + e.message;
        }
      });

      clearBtn.addEventListener("click", () => output.textContent = "");
    });
  </script>
</body>
</html>