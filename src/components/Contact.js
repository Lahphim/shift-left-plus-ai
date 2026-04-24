export default function Contact() {
  return `
    <div id="contact-page" class="page">
      <h1>ติดต่อเรา</h1>
      
      <!-- FAIL 2.4.10 Section Headings -->
      <h2>ข้อมูล 1</h2>
      
      <p>หากมีข้อสงสัยใดๆ ท่านสามารถติดต่อเราได้ตามช่องทางต่างๆ</p>
      
      <!-- FAIL 3.1.4 Abbreviations -->
      <p>ที่ตั้งสำนักงานใหญ่ของเราอยู่ใกล้กับ สนง.ใหญ่ ของ กฟผ. ท่านสามารถนั่ง BTS หรือ MRT มาลงที่สถานีใกล้เคียงได้</p>
      
      <!-- FAIL 2.4.9 Link Purpose -->
      <a class="action-btn" data-link="home">กดตรงนี้</a>
    </div>
  `;
}
