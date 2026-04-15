const Canvas = require('canvas');
const fs = require('fs');
const path = require('path');

async function createProgramBanner() {
  const width = 1200;
  const height = 600;
  const canvas = Canvas.createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#1a3a7a');
  gradient.addColorStop(0.5, '#2c5aa0');
  gradient.addColorStop(1, '#0d1f4a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Decorative circles
  ctx.fillStyle = 'rgba(212, 168, 64, 0.1)';
  ctx.beginPath();
  ctx.arc(100, 100, 150, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = 'rgba(212, 168, 64, 0.08)';
  ctx.beginPath();
  ctx.arc(1100, 500, 200, 0, Math.PI * 2);
  ctx.fill();

  // Top accent bar
  ctx.fillStyle = '#d4a840';
  ctx.fillRect(0, 0, width, 8);

  // Main heading
  ctx.font = 'bold 56px Arial, sans-serif';
  ctx.fillStyle = '#d4a840';
  ctx.textAlign = 'left';
  ctx.fillText('EVENING PROGRAMS', 60, 100);

  // Subheading
  ctx.font = '24px Arial, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('Professional Skill Development for Working Professionals', 60, 150);

  // Programs section
  const programs = [
    { icon: '🔒', title: 'Safety Officer', desc: 'NEBOSH, OSHA, IOSH Certifications' },
    { icon: '💻', title: 'Computer Courses', desc: 'CIT, DIT, Graphic Designing' },
    { icon: '📚', title: 'Education', desc: 'BA, B.ED, Montessori Training' },
    { icon: '🎓', title: 'Tuition Classes', desc: 'Nursery to FSC Support' }
  ];

  ctx.font = 'bold 20px Arial, sans-serif';
  ctx.fillStyle = '#ffffff';
  
  let yPos = 240;
  for (let i = 0; i < programs.length; i++) {
    const xPos = 60 + (i % 2) * 540;
    const newYPos = yPos + (Math.floor(i / 2) * 120);

    // Program box background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.beginPath();
    ctx.roundRect(xPos, newYPos, 480, 100, 12);
    ctx.fill();

    // Program border
    ctx.strokeStyle = 'rgba(212, 168, 64, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(xPos, newYPos, 480, 100, 12);
    ctx.stroke();

    // Icon
    ctx.font = '32px Arial, sans-serif';
    ctx.fillText(programs[i].icon, xPos + 20, newYPos + 60);

    // Title
    ctx.font = 'bold 18px Arial, sans-serif';
    ctx.fillStyle = '#d4a840';
    ctx.textAlign = 'left';
    ctx.fillText(programs[i].title, xPos + 70, newYPos + 45);

    // Description
    ctx.font = '13px Arial, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText(programs[i].desc, xPos + 70, newYPos + 70);
  }

  // Bottom tagline
  ctx.font = 'italic 18px Arial, sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.textAlign = 'center';
  ctx.fillText('Excellence in Education & Technical Mastery', width / 2, height - 40);

  // CTA button
  ctx.fillStyle = '#c41e3a';
  ctx.beginPath();
  ctx.roundRect(width - 240, height - 80, 200, 50, 8);
  ctx.fill();

  ctx.font = 'bold 18px Arial, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('Enroll Now', width - 140, height - 50);

  // Save to file
  const outputPath = path.join(__dirname, '../public/images/program-banner.png');
  const out = fs.createWriteStream(outputPath);
  const stream = canvas.createPNGStream();
  stream.pipe(out);

  return new Promise((resolve, reject) => {
    out.on('finish', () => {
      console.log(`✓ Program banner created: public/images/program-banner.png (${width}x${height})`);
      resolve();
    });
    out.on('error', reject);
  });
}

createProgramBanner().catch(console.error);
