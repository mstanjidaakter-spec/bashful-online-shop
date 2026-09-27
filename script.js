const WHATSAPP_NUMBER = "8801772906447";

function order(productName, price) {
  const message =
    "আসসালামু আলাইকুম। আমি আপনার অনলাইন শপ থেকে অর্ডার করতে চাই।\n\n" +
    "পণ্য: " + productName + "\n" +
    "মূল্য: ৳ " + price + "\n\n" +
    "আমার নাম:\n" +
    "ঠিকানা:\n" +
    "মোবাইল নম্বর:";

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}
