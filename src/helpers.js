export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const firstName = [
    "Michael",
    "Michelle",
    "Tamia",
    "Lexus",
    "Bryan",
    "Lucas",
    "Samantha",
    "Maya",
    "Jamie",
    "Christine",
    "Leo",
    "Max"
  ];

  const lastName = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Parker",
    "Cook",
    "Edwards",
    "Morris",
    "Turner",
    "Williamson",
    "Wilkinson"
  ];

  return `${rando(firstName)} ${rando(lastName)}`;
}
