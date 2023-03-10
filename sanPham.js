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
  html += '<button class="btn primary">Th??m v??o gi??? h??ng</button>';
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
  html += ' <div class="price">18.790.000 ??</div>';
  html += " </div>";
  html += ' <div class="price-gigabye">';
  html += '<div class="gigabye">256gb</div>';
  html += '<div class="price">21.390.000 ??</div>';
  html += " </div>";
  html += '<div class="price-gigabye">';
  html += '<div class="gigabye">512gb</div>';
  html += ' <div class="price">26.990.000 ??</div>';
  html += "</div>";
  html += " </div>";
  html += ' <div class="color">';
  html += '<div class="color-description price1">';
  html += '<a href="" class="text-price">M??u ??en 18.790.000 ???</a>';
  html += "</div>";
  html += '<div class="color-description price2">';
  html += ' <a href="" class="text-price">M??u tr???ng 18.790.000 ???</a>';
  html += " </div>";
  html += ' <div class="color-description price3">';
  html += '<a href="" class="text-price">M??u h???ng 18.790.000 ???</a>';
  html += " </div>";
  html += '<div class="color-description price4">';
  html += '<a href="" class="text-price">M??u ????? 18.790.000 ???</a>';
  html += "   </div>";
  html += ' <div class="color-description price5">';
  html += '<a href="" class="text-price">Xanh l?? c??y 18.790.000 ???</a>';
  html += " </div>";
  html += ' <div class="color-description price6">';
  html += '<a href="" class="text-price">M??u Xanh d????ng 18.790.000 ???</a>';
  html += "  </div>";
  html += "</div>";
  html += ' <div class="status">';
  html += "  <p>" + sanPham.tinhTrangDonHang + "</p>";
  html += " </div>";
  html += '<div class="promotion">';
  html += ' <div class="promotion_sale">';
  html +=
    ' <p class="promotion_sale--0">S??? h???u ngay c??ng ??u ????i tr??? gi?? ?????n 3.5 tri???u:</p>';
  html +=
    '<p class="promotion_sale--1">T???ng m?? b???o hi???m N??n S??n x Di ?????ng Vi???t ?????c quy???n tr??? gi?? 550.000?? </p>';
  html +=
    '<p class="promotion_sale--1">T???ng th??m ?????n 2.000.000?? khi Thu c?? ?????i m???i<a href="#">(Xem chi ti???t)</a></p>';
  html +=
    ' <p class="promotion_sale--1">Gi???m 1.000.000?? khi thanh to??n v?? tr??? g??p qua Kredivo<a href="#">(Xem chi ti???t)</a></p>';
  html += '  <p class="promotion_sale--1">';
  html += "T??? 14.10 - 31.10: Gi???m ngay 5% khi mua k??m";
  html += '<a href="#">Apple Watch Series 8 | SE 2022 | Ultra</a>';
  html += " </p>";
  html += "  Gi???m th??m 5% t???i ??a 1 tri???u khi thanh to??n qua Kredivo";
  html += " </p>";
  html += '<p class="uuDaiThem">T???ng th??m 2 tri???u khi m??? th??? TPBank EVO</p>';
  html += "</div>";
  html += "</div>";
  html += '<div class="from_payment">';
  html += '<p class="thanhvien">';
  html += " Gi???m th??m t???i 1.5% cho th??nh vi??n c???a Di ?????ng Vi???t. (Xem chi ti???t)";
  html += "</p>";
  html += '<p class="thanhvien">';
  html += " Mi???n ph?? Giao h??ng si??u t???c trong 1 gi??? (Xem chi ti???t)";
  html += "</p>";
  html += ' <div class="from_payment--booknow">';
  html += '<p class="from_payment--title">?????t Ngay</p>';
  html += '<p class="from_payment--delivery">';
  html += "Giao h??ng t???n n??i ho???c nh???n t???i c???a h??ng";
  html += " </p>";
  html += "</div>";
  html += ' <div class="format_payment">';
  html += '<div class="format_payment--installment">';
  html += '<div class="format_payment--title">tr??? g??p</div>';
  html += '  <div class="format_payment--title1">';
  html += "duy???t nhanh qua ??i???n tho???i";
  html += " </div>";
  html += "  </div>";
  html += ' <div class="format_payment--installment">';
  html += ' <div class="format_payment--title">tr??? g??p qua th???</div>';
  html += ' <div class="format_payment--title1">visa, mastercard,jcb</div>';
  html += " </div>";
  html += " </div>";
  html += " </div>";
  html += '  <div class="uuDaiBanKem">';
  html += ' <div class="uuDai">??u ????i b??n k??m</div>';
  html += "  <ul>";
  html += ' <li class="list">';
  html += "  C??? s???c nhanh 20W Apple gi?? ch??? 550.000?? (Gi?? ni??m y???t 790.000??)";
  html += " </li>";
  html += '<li class="list">';
  html += "Tai nghe AirPods 2 gi?? ch??? 2.650.000?? (Gi?? ni??m y???t 4.190.000??)";
  html += " </li>";
  html += '  <li class="list">';
  html += "  K??nh c?????ng l???c d??n mi???n ph?? tr???n ?????i gi?? ch??? 490.000??";
  html += " </li>";
  html += '<li class="list">';
  html += " Combo Ph??? ki???n Ti???t ki???m gi?? ch??? 690.000?? (Gi?? ni??m y???t 990.000??)";
  html += "</li>";
  html += '<li class="list">';
  html +=
    "Combo Ph??? ki???n Apple Ch??nh h??ng gi?? ch??? 950.000?? (Gi?? ni??m y???t 1.380.000??)";
  html += "</li>";
  html += '<li class="list">';
  html +=
    " Combo Ph??? ki???n B???o v??? Kh??ng gi???i h???n gi?? ch??? 990.000?? (Gi?? ni??m y???t 1.340.000??)";
  html += " </li>";
  html += '<li class="list">';
  html += "Xem th??m c??c combo ph??? ki???n si??u ??u ????i t???i ????y";
  html += "</li>";
  html += "</ul>";
  html += "</div>";
  html += "</div>";
  html += '<div class="lef_configuration"></div>';
  html += ' <div class="configuration">';
  html += ' <div class="cauHinh">C???u h??nh</div>';
  html += ' <div class="cNManHinh row white">';
  html += '  <div class="left">C??ng ngh??? m??n h??nh</div>';
  html += '<div class="right">' + sanPham.congNgheManHinh + "</div>";
  html += " </div>";
  html += '  <div class="doPhanGiai row">';
  html += '<div class="left">????? ph??n gi???i</div>';
  html += '<div class="right">' + sanPham.doPhanGiai + "</div>";
  html += "</div>";
  html += '<div class="manHinh row white">';
  html += '  <div class="left">M??n h??nh r???ng</div>';
  html += '<div class="right">' + sanPham.manHinhRong + "</div>";
  html += "</div>";
  html += '<div class="matKinh row">';
  html += '<div class="left">M???t k??nh c???m ???ng</div>';
  html += ' <div class="right">K??nh c?????ng l???c Ceramic Shield</div>';
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
  html += '<div class="left">????n Flash</div>';
  html += ' <div class="right">Flash-LED</div>';
  html += " </div>";
  html += '<div class="chupAnhNangCao row">';
  html += '<div class="left">Ch???p ???nh n??ng cao</div>';
  html += ' <div class="right">';
  html +=
    " Ch??? ????? ch??n dung v???i Bokeh / Ki???m so??t ????? s??u Portrait Lighting v???i s??u hi???u ???ng (T??? nhi??n, Studio, ???????ng vi???n, S??n kh???u, S??n kh???u Mono, High Key Mono) / Ch??? ????? ban ????m to??n c???nh 63MP / Hi???u ch???nh ???ng k??nh (Ultra Wide) / Photonic Engine";
  html += " </div>";
  html += "</div>";
  html += '<div class="cameraTruoc row white">';
  html += '<div class="left">Camera tr?????c</div>';
  html += ' <div class="right">12 MP</div>';
  html += "</div>";
  html += '<div class="videoCall row">';
  html += ' <div class="left">VideoCall</div>';
  html += '<div class="right">4K@60fps</div>';
  html += "</div>";
  html += '<div class="thongTinKhac row white">';
  html += '<div class="left">Th??ng Tin Kh??c</div>';
  html += '<div class="right">';
  html +=
    " HDR / L??m ?????p / Nh??n d??n (AR Stickers) / Nh???n di???n khu??n m???t / Quay";
  html += "video Full HD / To??n c???nh (Panorama) / T??? ?????ng l???y n??t (AF) / X??a";
  html += " ph??ng";
  html += "</div>";
  html += "</div>";
  html += '<div class="heDieuHanh row">';
  html += ' <div class="left">H??? ??i???u H??nh</div>';
  html += '  <div class="right">IOS 16</div>';
  html += '<div class="chipSet row white">';
  html += ' <div class="left">Chipset (h??ng SX CPU)</div>';
  html += '<div class="right">Apple A16 Bionic 6 nh??n</div>';
  html += "</div>";
  html += '<div class="chipDoHoa row">';
  html += '<div class="left">Chip ????? h???a (GPU)</div>';
  html += ' <div class="right">Apple GPU 5 nh??n</div>';
  html += " </div>";
  html += '  <div class="ram row white">';
  html += ' <div class="left">RAM</div>';
  html += ' <div class="right">6 GB</div>';
  html += "</div>";
  html += ' <div class="boNhoTrong row">';
  html += ' <div class="left">B??? nh??? trong</div>';
  html += ' <div class="right">128 GB</div>';
  html += "</div>";
  html += '<div class="theNhoNgoai row white">';
  html += '<div class="left">' + sanPham.theNhoNgoai + "</div>";
  html += ' <div class="right">Kh??ng</div>';
  html += " </div>";
  html += '<div class="mangDiDong row">';
  html += ' <div class="left">M???ng di ?????ng</div>';
  html += ' <div class="right">H??? tr??? m???ng 5G</div>';
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
  html += '<div class="left">C????ng k????t n????i/sa??c</div>';
  html += '  <div class="right">Lightning</div>';
  html += " </div>";
  html += '<div class="jack row">';
  html += '<div class="left">Jack tai nghe</div>';
  html += '<div class="right">kh??ng</div>';
  html += " </div>";
  html += '<div class="ketNoiKhac row white">';
  html += '<div class="left">K???t n???i kh??c</div>';
  html += ' <div class="right">NFC</div>';
  html += "</div>";
  html += '<div class="thietKe row">';
  html += '<div class="left">Thi???t K???</div>';
  html += '<div class="right">Nguy??n kh???i</div>';
  html += " </div>";
  html += '<div class="chatLieu row white">';
  html += '<div class="left">Ch???t li???u</div>';
  html += '<div class="right">Khung kim lo???i & M???t l??ng k??nh c?????ng l???c</div>';
  html += "</div>";
  html += ' <div class="kichThuoc row">';
  html += '  <div class="left">K??ch th?????c</div>';
  html += '<div class="right">D??i 160.7 mm - Ngang 77.6 mm - D??y 7.85 mm</div>';
  html += "  </div>";
  html += ' <div class="trongLuong row white">';
  html += '<div class="left">Tr???ng l?????ng</div>';
  html += '<div class="right">' + sanPham.trongLuong + "</div>";
  html += " </div>";
  html += ' <div class="dungLuongPin row">';
  html += ' <div class="left">Dung l?????ng pin</div>';
  html += ' <div class="right">??ang c???p nh???t</div>';
  html += " </div>";
  html += '  <div class="loaiPin row white">';
  html += ' <div class="left">Lo???i Pin</div>';
  html += '<div class="right">Li-Ion</div>';
  html += "</div>";
  html += '<div class="congNghePin row">';
  html += ' <div class="left">C??ng Ngh??? pin</div>';
  html += '  <div class="right">';
  html += " S???c kh??ng d??y MagSafe / S???c pin nhanh / Ti???t ki???m pin";
  html += " </div>";
  html += " </div>";
  html += ' <div class="baoMatNangCao row white">';
  html += ' <div class="left">B???o m???t n??ng cao</div>';
  html += ' <div class="right">Nh???n di???n khu??n m???t FaceID</div>';
  html += "  </div>";
  html += ' <div class="thoiDiemRaMat row">';
  html += '<div class="left">Th???i ??i???m ra m???t</div>';
  html += ' <div class="right">09/2022</div>';
  html += "  </div>";
  html += " </div>";
  // html += "</div>";
  return html;
}
