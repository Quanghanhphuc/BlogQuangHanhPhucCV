function TaoDoiTuongSanPham(
  hinhAnh,
  ten,
  giaGoc,
  phanTramGiamGia,
  khuVuc,
  moTa,
  soGB,
  giaTheoDungLuong,
  giaTheoMau,
  tinhTrangDonHang,
  congNgheManHinh,
  doPhanGiai,
  manHinhRong,
  matKinhCamUng,
  camMeraSau,
  quayPhim,
  denFlash,
  chupAnhNangCao,
  camMeraTruoc,
  videoCall,
  thongTinKhac,
  heDieuHanh,
  chipSet,
  chipDoHoa,
  ram,
  boNhoTrong,
  theNhoNgoai,
  mangDiDong,
  sim,
  wifi,
  gps,
  bluetooth,
  congKetNoi,
  jack,
  ketNoiKhac,
  thietKe,
  chatLieu,
  kichThuoc,
  trongLuong,
  dungLuongPin,
  loaiPin,
  congNghePin,
  baoMatNangCao,
  thoiDiemRaMat,
  id
) {
  var sanPham = new Object();
  sanPham.hinhAnh = hinhAnh;
  sanPham.ten = ten;
  sanPham.giaGoc = giaGoc;
  sanPham.phanTramGiamGia = phanTramGiamGia;
  sanPham.khuVuc = khuVuc;
  sanPham.moTa = moTa;
  sanPham.soGB = soGB;
  sanPham.giaTheoDungLuong = giaTheoDungLuong;
  sanPham.giaTheoMau = giaTheoMau;
  sanPham.tinhTrangDonHang = tinhTrangDonHang;
  sanPham.congNgheManHinh = congNgheManHinh;
  sanPham.doPhanGiai = doPhanGiai;
  sanPham.manHinhRong = manHinhRong;
  sanPham.matKinhCamUng = matKinhCamUng;
  sanPham.camMeraSau = camMeraSau;
  sanPham.quayPhim = quayPhim;
  sanPham.denFlash = denFlash;
  sanPham.chupAnhNangCao = chupAnhNangCao;
  sanPham.camMeraTruoc = camMeraTruoc;
  sanPham.videoCall = videoCall;
  sanPham.thongTinKhac = thongTinKhac;
  sanPham.heDieuHanh = heDieuHanh;
  sanPham.chipSet = chipSet;
  sanPham.chipDoHoa = chipDoHoa;
  sanPham.ram = ram;
  sanPham.boNhoTrong = boNhoTrong;
  sanPham.theNhoNgoai = theNhoNgoai;
  sanPham.mangDiDong = mangDiDong;
  sanPham.sim = sim;
  sanPham.wifi = wifi;
  sanPham.gps = gps;
  sanPham.bluetooth = bluetooth;
  sanPham.congKetNoi = congKetNoi;
  sanPham.jack = jack;
  sanPham.ketNoiKhac = ketNoiKhac;
  sanPham.thietKe = thietKe;
  sanPham.chatLieu = chatLieu;
  sanPham.kichThuoc = kichThuoc;
  sanPham.trongLuong = trongLuong;
  sanPham.dungLuongPin = dungLuongPin;
  sanPham.congNghePin = congNghePin;
  sanPham.loaiPin = loaiPin;
  sanPham.baoMatNangCao = baoMatNangCao;
  sanPham.thoiDiemRaMat = thoiDiemRaMat;
  sanPham.id = taoID();

  sanPham.tinhGiaBan = function () {
    var giaBan = this.giaGoc * (1 - this.phanTramGiamGia);
    return giaBan;
  };
  sanPham.toJson = function () {
    var json = JSON.stringify(this);
    return json;
  };

  sanPham.fromJSON = function (json) {
    var doiTuongDayDu = new Object();
    var doiTuong = JSON.parse(json);

    var doiTuongDayDu = TaoDoiTuongSanPham(
      doiTuong.hinhAnh,
      doiTuong.ten,
      doiTuong.giaGoc,
      doiTuong.phanTramGiamGia,
      doiTuong.khuVuc,
      doiTuong.moTa,
      doiTuong.soGB,
      doiTuong.dungLuongPin,
      doiTuong.giaTheoMau,
      doiTuong.tinhTrangDonHang,
      doiTuong.congNgheManHinh,
      doiTuong.doPhanGiai,
      doiTuong.manHinhRong,
      doiTuong.matKinhCamUng,
      doiTuong.camMeraSau,
      doiTuong.quayPhim,
      doiTuong.denFlash,
      doiTuong.chupAnhNangCao,
      doiTuong.camMeraTruoc,
      doiTuong.videoCall,
      doiTuong.thongTinKhac,
      doiTuong.heDieuHanh,
      doiTuong.chipSet,
      doiTuong.chipDoHoa,
      doiTuong.ram,
      doiTuong.boNhoTrong,
      doiTuong.theNhoNgoai,
      doiTuong.mangDiDong,
      doiTuong.sim,
      doiTuong.wifi,
      doiTuong.gps,
      doiTuong.bluetooth,
      doiTuong.congKetNoi,
      doiTuong.jack,
      doiTuong.ketNoiKhac,
      doiTuong.thietKe,
      doiTuong.chatLieu,
      doiTuong.kichThuoc,
      doiTuong.trongLuong,
      doiTuong.dungLuongPin,
      doiTuong.loaiPin,
      doiTuong.congNghePin,
      doiTuong.baoMatNangCao,
      doiTuong.thoiDiemRaMat,
      doiTuong.id
    );
    return doiTuongDayDu;
  };
  return sanPham;
}

function chuyenDanhSachSPSangHTML(danhSachSanPham) {
  var danhSachSPHTML = '<div class="items">';
  for (let i = 0; i < danhSachSanPham.length; i++) {
    var sanPham = danhSachSanPham[i];
    var htmlSanPham = chuyenDoiTuongSangHTML(sanPham);
    danhSachSPHTML = danhSachSPHTML + htmlSanPham;
  }
  danhSachSPHTML = danhSachSPHTML + "</div>";
  return danhSachSPHTML;
}

function chuyenDoiTuongSangHTML(sanPham) {
  var html = "";
  html += '<div class="item">';
  html += '<a href="productdetails.html">';
  html += ' <div class="item-thums">';
  html += '<img src="' + sanPham.hinhAnh + '" alt=""/>';
  html += "  </div>";
  html += '  <h2 class="item-title">' + sanPham.ten + "</h2>";
  html += ' <div class="item-price price">';
  // html += '<span class="item-origin">' + sanPham.giaBan() + "</span>";
  html += ' <span class="item-price-sale">' + sanPham.giaGoc + "</span>";
  html += "  </div>";
  html += '<div class="buyMoreCart">';
  html += '  <button class="buy">Mua</button>';
  html += '<button class="btn primary">Thêm vào giỏ hàng</button>';
  html += " </div>";
  html += " </a>";

  html += "</div>";
  return html;
}

function chuyenDanhSachSangHTMlChiTietSanPham(danhSachSanPham) {
  var danhSachSPHTML = '<div class="productDescription">';
  console.log(danhSachSPHTML);
  for (let i = 0; i < danhSachSanPham.length; i++) {
    var sanPham = danhSachSanPham[i];
    var htmlSanPham = chuyenDoiTuongSangChiTietSP(sanPham);
    danhSachSPHTML = danhSachSPHTML + htmlSanPham;
  }
  danhSachSPHTML = danhSachSPHTML + "</div>";
  return danhSachSPHTML;
}

function chuyenDoiTuongSangChiTietSP(sanPham) {
  var html = "";
  html +=
    '<a href="productdetails.html" onclick="onclickChiTietSP(\'' +
    sanPham.id +
    "')></a>";
  html += '<div class="productDescription-left">';

  html += ' <div class="productDescription-left-img">';

  html += ' <img src="' + sanPham.hinhAnh + '" alt=""/>';

  html += "</div>";
  html += '<div class="productDescription-left-introduce">';
  html += ' <p class="introduce">' + sanPham.moTa + "</p>";
  html += ' <p class="introducr">' + sanPham.moTa + "</p>";
  html += "</div>";
  html += " </div>";
  html += '<div class="productDescription-right">';
  html += '<div class="productDescription-name">';
  html += '<span class="name">' + sanPham.ten + "</span>";
  html += '<div class="start"></div>';
  html += "</div>";
  html += ' <div class="productDescription-price">';
  html += '  <div class="price-gigabye">';
  html += ' <div class="gigabye">128gb</div>';
  html += ' <div class="price">18.790.000 đ</div>';
  html += " </div>";
  html += ' <div class="price-gigabye">';
  html += '<div class="gigabye">256gb</div>';
  html += '<div class="price">21.390.000 đ</div>';
  html += " </div>";
  html += '<div class="price-gigabye">';
  html += '<div class="gigabye">512gb</div>';
  html += ' <div class="price">26.990.000 đ</div>';
  html += "</div>";
  html += " </div>";
  html += ' <div class="color">';
  html += '<div class="color-description price1">';
  html += '<a href="" class="text-price">Màu đen 18.790.000 ₫</a>';
  html += "</div>";
  html += '<div class="color-description price2">';
  html += ' <a href="" class="text-price">Màu trắng 18.790.000 ₫</a>';
  html += " </div>";
  html += ' <div class="color-description price3">';
  html += '<a href="" class="text-price">Màu hồng 18.790.000 ₫</a>';
  html += " </div>";
  html += '<div class="color-description price4">';
  html += '<a href="" class="text-price">Màu đỏ 18.790.000 ₫</a>';
  html += "   </div>";
  html += ' <div class="color-description price5">';
  html += '<a href="" class="text-price">Xanh lá cây 18.790.000 ₫</a>';
  html += " </div>";
  html += ' <div class="color-description price6">';
  html += '<a href="" class="text-price">Màu Xanh dương 18.790.000 ₫</a>';
  html += "  </div>";
  html += "</div>";
  html += ' <div class="status">';
  html += "  <p>" + sanPham.tinhTrangDonHang + "</p>";
  html += " </div>";
  html += '<div class="promotion">';
  html += ' <div class="promotion_sale">';
  html +=
    ' <p class="promotion_sale--0">Sở hữu ngay cùng ưu đãi trị giá đến 3.5 triệu:</p>';
  html +=
    '<p class="promotion_sale--1">Tặng mũ bảo hiểm Nón Sơn x Di Động Việt độc quyền trị giá 550.000đ </p>';
  html +=
    '<p class="promotion_sale--1">Tặng thêm đến 2.000.000đ khi Thu cũ đổi mới<a href="#">(Xem chi tiết)</a></p>';
  html +=
    ' <p class="promotion_sale--1">Giảm 1.000.000đ khi thanh toán và trả góp qua Kredivo<a href="#">(Xem chi tiết)</a></p>';
  html += '  <p class="promotion_sale--1">';
  html += "Từ 14.10 - 31.10: Giảm ngay 5% khi mua kèm";
  html += '<a href="#">Apple Watch Series 8 | SE 2022 | Ultra</a>';
  html += " </p>";
  html += "  Giảm thêm 5% tối đa 1 triệu khi thanh toán qua Kredivo";
  html += " </p>";
  html += '<p class="uuDaiThem">Tặng thêm 2 triệu khi mở thẻ TPBank EVO</p>';
  html += "</div>";
  html += "</div>";
  html += '<div class="from_payment">';
  html += '<p class="thanhvien">';
  html += " Giảm thêm tới 1.5% cho thành viên của Di Động Việt. (Xem chi tiết)";
  html += "</p>";
  html += '<p class="thanhvien">';
  html += " Miễn phí Giao hàng siêu tốc trong 1 giờ (Xem chi tiết)";
  html += "</p>";
  html += ' <div class="from_payment--booknow">';
  html += '<p class="from_payment--title">Đặt Ngay</p>';
  html += '<p class="from_payment--delivery">';
  html += "Giao hàng tận nơi hoặc nhận tại cửa hàng";
  html += " </p>";
  html += "</div>";
  html += ' <div class="format_payment">';
  html += '<div class="format_payment--installment">';
  html += '<div class="format_payment--title">trả góp</div>';
  html += '  <div class="format_payment--title1">';
  html += "duyệt nhanh qua điện thoại";
  html += " </div>";
  html += "  </div>";
  html += ' <div class="format_payment--installment">';
  html += ' <div class="format_payment--title">trả góp qua thẻ</div>';
  html += ' <div class="format_payment--title1">visa, mastercard,jcb</div>';
  html += " </div>";
  html += " </div>";
  html += " </div>";
  html += '  <div class="uuDaiBanKem">';
  html += ' <div class="uuDai">Ưu đãi bán kèm</div>';
  html += "  <ul>";
  html += ' <li class="list">';
  html += "  Củ sạc nhanh 20W Apple giá chỉ 550.000đ (Giá niêm yết 790.000đ)";
  html += " </li>";
  html += '<li class="list">';
  html += "Tai nghe AirPods 2 giá chỉ 2.650.000đ (Giá niêm yết 4.190.000đ)";
  html += " </li>";
  html += '  <li class="list">';
  html += "  Kính cường lực dán miễn phí trọn đời giá chỉ 490.000đ";
  html += " </li>";
  html += '<li class="list">';
  html += " Combo Phụ kiện Tiết kiệm giá chỉ 690.000đ (Giá niêm yết 990.000đ)";
  html += "</li>";
  html += '<li class="list">';
  html +=
    "Combo Phụ kiện Apple Chính hãng giá chỉ 950.000đ (Giá niêm yết 1.380.000đ)";
  html += "</li>";
  html += '<li class="list">';
  html +=
    " Combo Phụ kiện Bảo vệ Không giới hạn giá chỉ 990.000đ (Giá niêm yết 1.340.000đ)";
  html += " </li>";
  html += '<li class="list">';
  html += "Xem thêm các combo phụ kiện siêu ưu đãi tại đây";
  html += "</li>";
  html += "</ul>";
  html += "</div>";
  html += "</div>";
  html += '<div class="lef_configuration"></div>';
  html += ' <div class="configuration">';
  html += ' <div class="cauHinh">Cấu hình</div>';
  html += ' <div class="cNManHinh row white">';
  html += '  <div class="left">Công nghệ màn hình</div>';
  html += '<div class="right">' + sanPham.congNgheManHinh + "</div>";
  html += " </div>";
  html += '  <div class="doPhanGiai row">';
  html += '<div class="left">Độ phân giải</div>';
  html += '<div class="right">' + sanPham.doPhanGiai + "</div>";
  html += "</div>";
  html += '<div class="manHinh row white">';
  html += '  <div class="left">Màn hình rộng</div>';
  html += '<div class="right">' + sanPham.manHinhRong + "</div>";
  html += "</div>";
  html += '<div class="matKinh row">';
  html += '<div class="left">Mặt kính cảm ứng</div>';
  html += ' <div class="right">Kính cường lực Ceramic Shield</div>';
  html += " </div>";
  html += ' <div class="camera row white">';
  html += '<div class="left">Camera sau</div>';
  html += '<div class="right">2 camera 12 MP</div>';
  html += "</div>";
  html += '<div class="quayPhim row">';
  html += ' <div class="left">Quay phim</div>';
  html += '<div class="right">4K@60fps</div>';
  html += " </div>";
  html += '<div class="denflash row white">';
  html += '<div class="left">Đèn Flash</div>';
  html += ' <div class="right">Flash-LED</div>';
  html += " </div>";
  html += '<div class="chupAnhNangCao row">';
  html += '<div class="left">Chụp ảnh nâng cao</div>';
  html += ' <div class="right">';
  html +=
    " Chế độ chân dung với Bokeh / Kiểm soát độ sâu Portrait Lighting với sáu hiệu ứng (Tự nhiên, Studio, Đường viền, Sân khấu, Sân khấu Mono, High Key Mono) / Chế độ ban đêm toàn cảnh 63MP / Hiệu chỉnh ống kính (Ultra Wide) / Photonic Engine";
  html += " </div>";
  html += "</div>";
  html += '<div class="cameraTruoc row white">';
  html += '<div class="left">Camera trước</div>';
  html += ' <div class="right">12 MP</div>';
  html += "</div>";
  html += '<div class="videoCall row">';
  html += ' <div class="left">VideoCall</div>';
  html += '<div class="right">4K@60fps</div>';
  html += "</div>";
  html += '<div class="thongTinKhac row white">';
  html += '<div class="left">Thông Tin Khác</div>';
  html += '<div class="right">';
  html +=
    " HDR / Làm đẹp / Nhãn dán (AR Stickers) / Nhận diện khuôn mặt / Quay";
  html += "video Full HD / Toàn cảnh (Panorama) / Tự động lấy nét (AF) / Xóa";
  html += " phông";
  html += "</div>";
  html += "</div>";
  html += '<div class="heDieuHanh row">';
  html += ' <div class="left">Hệ Điều Hành</div>';
  html += '  <div class="right">IOS 16</div>';
  html += '<div class="chipSet row white">';
  html += ' <div class="left">Chipset (hãng SX CPU)</div>';
  html += '<div class="right">Apple A16 Bionic 6 nhân</div>';
  html += "</div>";
  html += '<div class="chipDoHoa row">';
  html += '<div class="left">Chip đồ họa (GPU)</div>';
  html += ' <div class="right">Apple GPU 5 nhân</div>';
  html += " </div>";
  html += '  <div class="ram row white">';
  html += ' <div class="left">RAM</div>';
  html += ' <div class="right">6 GB</div>';
  html += "</div>";
  html += ' <div class="boNhoTrong row">';
  html += ' <div class="left">Bộ nhớ trong</div>';
  html += ' <div class="right">128 GB</div>';
  html += "</div>";
  html += '<div class="theNhoNgoai row white">';
  html += '<div class="left">' + sanPham.theNhoNgoai + "</div>";
  html += ' <div class="right">Không</div>';
  html += " </div>";
  html += '<div class="mangDiDong row">';
  html += ' <div class="left">Mạng di động</div>';
  html += ' <div class="right">Hỗ trợ mạng 5G</div>';
  html += " </div>";
  html += '<div class="sim row white">';
  html += '<div class="left">SIM</div>';
  html += ' <div class="right">1 Nano SIM & 1 eSIM</div>';
  html += " </div>";
  html += '<div class="wifi row">';
  html += ' <div class="left">Wifi</div>';
  html += '<div class="right">';
  html += " Wi-Fi 802.11 a/b/g/n/ac/6e, Dual-band, Wi-Fi Direct, Wi-Fi hotspot";
  html += "</div>";
  html += " </div>";
  html += '<div class="GPS row white">';
  html += '<div class="left">GPS</div>';
  html += '<div class="right">GPS / Glonass / Beidou / Galileo / QZSS</div>';
  html += "</div>";
  html += '<div class="bluetooth row">';
  html += '<div class="left">Bluetooth</div>';
  html += ' <div class="right">v5.3</div>';
  html += "</div>";
  html += '  <div class="congKetNoi row white">';
  html += '<div class="left">Cổng kết nối/sạc</div>';
  html += '  <div class="right">Lightning</div>';
  html += " </div>";
  html += '<div class="jack row">';
  html += '<div class="left">Jack tai nghe</div>';
  html += '<div class="right">không</div>';
  html += " </div>";
  html += '<div class="ketNoiKhac row white">';
  html += '<div class="left">Kết nối khác</div>';
  html += ' <div class="right">NFC</div>';
  html += "</div>";
  html += '<div class="thietKe row">';
  html += '<div class="left">Thiết Kế</div>';
  html += '<div class="right">Nguyên khối</div>';
  html += " </div>";
  html += '<div class="chatLieu row white">';
  html += '<div class="left">Chất liệu</div>';
  html += '<div class="right">Khung kim loại & Mặt lưng kính cường lực</div>';
  html += "</div>";
  html += ' <div class="kichThuoc row">';
  html += '  <div class="left">Kích thước</div>';
  html += '<div class="right">Dài 160.7 mm - Ngang 77.6 mm - Dày 7.85 mm</div>';
  html += "  </div>";
  html += ' <div class="trongLuong row white">';
  html += '<div class="left">Trọng lượng</div>';
  html += '<div class="right">' + sanPham.trongLuong + "</div>";
  html += " </div>";
  html += ' <div class="dungLuongPin row">';
  html += ' <div class="left">Dung lượng pin</div>';
  html += ' <div class="right">Đang cập nhật</div>';
  html += " </div>";
  html += '  <div class="loaiPin row white">';
  html += ' <div class="left">Loại Pin</div>';
  html += '<div class="right">Li-Ion</div>';
  html += "</div>";
  html += '<div class="congNghePin row">';
  html += ' <div class="left">Công Nghệ pin</div>';
  html += '  <div class="right">';
  html += " Sạc không dây MagSafe / Sạc pin nhanh / Tiết kiệm pin";
  html += " </div>";
  html += " </div>";
  html += ' <div class="baoMatNangCao row white">';
  html += ' <div class="left">Bảo mật nâng cao</div>';
  html += ' <div class="right">Nhận diện khuôn mặt FaceID</div>';
  html += "  </div>";
  html += ' <div class="thoiDiemRaMat row">';
  html += '<div class="left">Thời điểm ra mắt</div>';
  html += ' <div class="right">09/2022</div>';
  html += "  </div>";
  html += " </div>";
  // html += "</div>";
  return html;
}
