import { chromium } from 'playwright';


(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    // Test Sender Modal
    await page.goto('http://localhost:5173/senders');
    await page.waitForTimeout(1000);
    await page.click('button:has-text("เพิ่มผู้ส่งใหม่")');
    await page.waitForTimeout(500);
    await page.screenshot({ path: '/Users/buttersugar104/.gemini/antigravity/brain/5cb03487-31cd-48db-9405-cd350d0c1679/sender_modal_background_check_1773245779524.png' });
    console.log('Saved sender_modal_background_check_1773245779524.png');

    await browser.close();
})();
