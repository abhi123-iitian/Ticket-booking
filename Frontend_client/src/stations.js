export const stations = {
    "KGP": { "startStation": true, "price": 0 },
    "KANPUR": { "price": 5 },
    "DELHI": { "price": 10 },
    "LUCKNOW": { "price": 15 },
    "UNNAV": { "price": 20 },
    "RBL": { "price": 25 },
    "AGRA": { "price": 30 },
    "AYODHYA": { "price": 35 },
    "MATHURA": { "price": 40 },
    "PRAYAGRAJ": { "price": 45 },
    "BANDA": { "price": 50 },
    "MAHOBA": { "price": 55 },
    "HAMIRPUR": { "price": 60 },
    "AMROHA": { "price": 65 },
    "MUMBAI": { "lastStation": true, "price": 70 }
  };
  
  export function calculatePrice(start, end) {
    if (!stations[start] || !stations[end]) {
      console.error("Invalid station:", start, end);
      return 0; // Or handle this scenario appropriately
    }
    return Math.abs(stations[start].price - stations[end].price);
  }
  
  