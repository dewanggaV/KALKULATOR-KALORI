function calculateCalories() {
  const gender = document.getElementById('gender').value;
  const age = parseInt(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const activityLevel = parseFloat(document.getElementById('activity-level').value);

  if (gender && !isNaN(age) && !isNaN(weight) && !isNaN(height) && activityLevel) {
    let bmr;

    if (gender === 'male') {
      bmr = 88.4 + (13.4 * weight) + (4.8 * height) - (5.68 * age);
    } else {
      bmr = 447.6 + (9.25 * weight) + (3.1 * height) - (4.33 * age);
    }

    const dailyCalories = Math.round(bmr * activityLevel);

    const resultElement = document.getElementById('result');
    const result = `Kebutuhan Kalori Harian Anda adalah sekitar ${dailyCalories} kkal.`;
    resultElement.textContent = result;
  } else {
    alert('Harap masukkan semua informasi yang diperlukan.');
  }
}
