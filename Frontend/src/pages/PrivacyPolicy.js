import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import logo from "../assets/Remove-bg.ai_1720413887960.png";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Chính Sách Bảo Hành Sản Phẩm"} />
      <BreadCrumb title="Chính Sách Bảo Hành Sản Phẩm" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <img
                src={logo}
                alt="Logo"
                style={{
                  maxWidth: "200px", // Increase the size of the logo
                  display: "block", // Center the logo horizontally
                  margin: "0 auto 20px auto" // Center the logo horizontally and add margin at the bottom
                }}
              />
              <h1>Chính Sách Bảo Hành Sản Phẩm</h1>

              <h2>1) Bảo Hành Có Cam Kết Trong 12 Tháng</h2>
              <p>
                - RIÊNG Phụ kiện có điện AVA bảo hành 3 tháng. Đồng hồ thời trang chỉ bảo hành bộ máy, không bảo hành dây, vỏ, mặt kính.<br />
                - Chỉ áp dụng cho sản phẩm chính, KHÔNG áp dụng cho phụ kiện đi kèm sản phẩm chính.
              </p>
              <p>
                + Bảo hành trong vòng 15 ngày (tính từ ngày TGDĐ nhận máy ở trạng thái lỗi và đến ngày gọi khách hàng ra lấy lại máy đã bảo hành).<br />
                + Sản phẩm không bảo hành lại lần 2 trong 30 ngày kể từ ngày máy được bảo hành xong.<br />
                + Nếu A2K vi phạm cam kết (bảo hành quá 15 ngày hoặc phải bảo hành lại sản phẩm lần nữa trong 30 ngày kể từ lần bảo hành trước), Khách hàng được áp dụng phương thức Hư gì đổi nấy ngay và luôn hoặc Hoàn tiền với mức phí giảm 50%.<br />
                *Từ tháng thứ 13 trở đi không áp dụng bảo hành cam kết, chỉ áp dụng bảo hành hãng (nếu có).
              </p>
              <p>- Sản phẩm đủ điều kiện bảo hành của hãng.</p>

              <h2>2) Hư Gì Đổi Nấy Ngay Và Luôn</h2>
              <p>(KHÔNG áp dụng cho Đồng hồ (ngoại trừ 3 hãng ELIO, SKMEI, SMILE KID), phụ kiện có điện)</p>
              <p>
                Sản phẩm hư gì thì đổi đó (cùng model, cùng dung lượng, cùng màu sắc...) đối với sản phẩm chính và đổi tương đương đối với phụ kiện đi kèm, cụ thể:
              </p>
              <h3>2.1) Hư sản phẩm chính thì đổi sản phẩm chính mới</h3>
              <p>
                - Tháng đầu tiên kể từ ngày mua: miễn phí.<br />
                - Tháng thứ 2 đến tháng thứ 12: phí 10% giá trị hóa đơn/tháng.<br />
                (VD: tháng thứ 2 phí 10%, tháng thứ 3 phí 20%...).
              </p>
              <p>
                Lưu ý: Nếu không có sản phẩm chính đổi cho Khách hàng thì áp dụng chính sách Bảo hành có cam kết hoặc Hoàn tiền với mức phí giảm 50%.
              </p>

              <h3>2.2) Hư phụ kiện đi kèm thì đổi phụ kiện có cùng công năng mà TGDĐ/ĐMX đang kinh doanh</h3>
              <p>
                Phụ kiện đi kèm được đổi miễn phí trong vòng 12 tháng kể từ ngày mua sản phẩm chính bằng hàng phụ kiện TGDĐ đang kinh doanh mới với chất lượng tương đương.<br />
                Lưu ý: Nếu không có phụ kiện tương đương hoặc Khách hàng không thích thì áp dụng bảo hành hãng.
              </p>

              <h3>2.3) Lỗi phần mềm không áp dụng, mà chỉ khắc phục lỗi phần mềm.</h3>
              <h3>2.4) Trường hợp Khách hàng muốn đổi full box (nguyên thùng, nguyên hộp)</h3>
              <p>
                ngoài việc áp dụng mức phí đổi trả tại Mục 2.1 thì Khách hàng sẽ trả thêm phí lấy full box tương đương 20% giá trị hóa đơn.
              </p>
              <p>
                Ghi chú: Từ ngày 01/10/2021, riêng sản phẩm đồng hồ 3 hãng ELIO, SKMEI, SMILE KID sẽ được áp dụng 1 đổi 1 trong 12 tháng, không mất phí khi sản phẩm bị lỗi từ phía nhà sản xuất. Các hãng đồng hồ còn lại, chỉ áp dụng bảo hành có cam kết và hoàn tiền (lỗi hoặc không lỗi).
              </p>
              <p>
                - Sản phẩm đổi trả phải giữ nguyên 100% hình dạng ban đầu và đủ điều kiện bảo hành của hãng.<br />
                - Thân máy, màn hình không trầy xước (áp dụng cho Điện thoại, Tablet, Laptop, màn hình máy tính, máy tính để bàn).<br />
                - Sản phẩm chỉ dùng cho mục đích sử dụng cá nhân, không áp dụng việc sử dụng sản phẩm cho mục đích thương mại.
              </p>

              <h2>3) Hoàn Tiền: Áp dụng cho sản phẩm lỗi và không lỗi</h2>
              <p>
                - Tháng đầu tiên kể từ ngày mua: phí 20% giá trị hóa đơn.<br />
                - Tháng thứ 2 đến tháng thứ 12: phí 10% giá trị hóa đơn/tháng.<br />
                - Riêng phụ kiện có điện AVA: áp dụng hoàn tiền trong 3 tháng với mức phí như trên. Từ tháng thứ 4 trở đi không áp dụng hoàn tiền.
              </p>
              <p>
                - Sản phẩm đổi trả phải giữ nguyên 100% hình dạng ban đầu và đủ điều kiện bảo hành của hãng.<br />
                - Thân máy, màn hình không trầy xước (áp dụng cho Điện thoại, Tablet, Laptop, Màn hình máy tính, Máy tính để bàn, Đồng hồ).<br />
                - Sản phẩm chỉ dùng cho mục đích sử dụng cá nhân, không áp dụng việc sử dụng sản phẩm cho mục đích thương mại.
              </p>
              <p>
                - Hoàn trả lại đầy đủ hộp, sạc, phụ kiện đi kèm:<br />
                + Mất hộp thu phí 2% giá trị hóa đơn đối với nhóm Điện thoại, Tablet, Laptop, Màn hình máy tính, Máy tính để bàn, Đồng hồ, Máy in.<br />
                + Mất phụ kiện thu phí theo giá bán tối thiểu trên website TGDĐ và chính hãng (tối đa 5% giá trị hóa đơn) cho tất cả nhóm sản phẩm.<br />
                - Hoàn trả toàn bộ hàng khuyến mãi. Nếu mất hàng khuyến mãi sẽ thu phí theo mức giá đã được công bố.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
