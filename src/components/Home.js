export default function Home() {
  return `
    <div id="home-page" class="page">
      <h1>หน้าแรก</h1>
      
      <!-- FAIL 2.4.10 Section Headings: Vague heading -->
      <h2>ส่วนที่ 1</h2>
      
      <!-- FAIL 3.1.5 Reading Level: Nested conjunctions -->
      <p>บริษัทของเราเป็นองค์กรที่มุ่งเน้นการพัฒนาซอฟต์แวร์อันเป็นเลิศซึ่งถูกออกแบบมาเพื่อผู้ใช้งานที่ต้องการประสิทธิภาพอันสูงสุด ซึ่งระบบนี้ถูกพัฒนาโดยทีมงานที่มีความเชี่ยวชาญอันประกอบไปด้วยวิศวกรที่ผ่านการรับรองซึ่งจะทำให้มั่นใจได้ว่าโครงสร้างที่เราได้วางไว้อันเป็นพื้นฐานที่สำคัญนั้นจะสามารถรองรับการทำงานที่ซับซ้อนได้</p>
      
      <!-- FAIL 2.4.10 Section Headings: Vague heading -->
      <h3>ข้อมูลเพิ่มเติม</h3>
      
      <!-- FAIL 3.1.4 Abbreviations: Unexplained acronyms -->
      <p>ทาง ครม. ได้มีมติให้ กทม. ดำเนินการตาม พ.ร.บ. อย่างเร่งด่วน โดยมี ผบ.ตร. เป็นผู้ควบคุมและประสานงานกับ รมว.กห. เพื่อให้โครงการเสร็จสิ้นตามแผนผัง</p>

      <div class="card-container">
        <div class="card">
          <!-- FAIL 2.4.10 Section Headings -->
          <h2>เรื่องต่างๆ 1</h2>
          <p>เรียนรู้เพิ่มเติมเกี่ยวกับบริการที่เรามีให้ซึ่งเป็นบริการที่ตอบโจทย์ความต้องการอันหลากหลาย</p>
          <!-- FAIL 2.4.9 Link Purpose: Vague link text -->
          <a class="action-btn" data-link="about">คลิกที่นี่</a>
        </div>
        <div class="card">
          <!-- FAIL 2.4.10 Section Headings -->
          <h2>เรื่องต่างๆ 2</h2>
          <p>สำหรับข้อมูลข่าวสารล่าสุด ท่านสามารถติดตามได้ที่หน้าข่าวสารของเรา</p>
          <!-- FAIL 2.4.9 Link Purpose: Vague link text -->
          <a class="action-btn" data-link="contact">อ่านรายละเอียดเพิ่มเติม</a>
        </div>
      </div>
    </div>
  `;
}
