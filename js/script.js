function updateDateTime() {
        const now = new Date();
        const currentDateTime = now.toLocaleString();
        document.getElementById('dateTime').textContent = currentDateTime;
      }
      updateDateTime();
      setInterval(updateDateTime, 1000);



    