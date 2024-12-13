async function fetchCryptos() {
    const url = "https://api.coincap.io/v2/assets";
    const container = document.getElementById('crypto-list');
  
    console.log("Starting fetchCryptos...");
  
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer 15ee76a5-a7a1-46de-ab9f-37b92aed0611`,
        },
      });
  
      console.log("API Response:", response);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Data:", data);
  
      const cryptos = data.data.slice(0, 10);
      cryptos.forEach((crypto) => {
        console.log("Adding crypto:", crypto.name);
        const div = document.createElement('div');
        div.className = 'crypto';
        div.innerHTML = `
          <span><strong>${crypto.rank}.</strong> ${crypto.name} (${crypto.symbol})</span>
          <span>$${parseFloat(crypto.priceUsd).toFixed(2)}</span>
        `;
        container.appendChild(div);
      });
    } catch (error) {
      console.error("Error fetching cryptocurrency data:", error);
    }
  }
  
  fetchCryptos();
  