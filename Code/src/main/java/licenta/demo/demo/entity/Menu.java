package licenta.demo.demo.entity;



import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "menus")
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="menuid")
    private Integer menuId;
    @Column(name="orderid")
    private Integer orderId;
    @Column(name="pageid")
    private Integer pageId;





    public Menu() {
    }


    public Menu(Integer orderId, Integer pageId) {
        this.orderId = orderId;
        this.pageId = pageId;
    }

    public Integer getMenuId() {
        return menuId;
    }

    public void setMenuId(Integer menuId) {
        this.menuId = menuId;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getPageId() {
        return pageId;
    }

    public void setPageId(Integer pageId) {
        this.pageId = pageId;
    }




}
