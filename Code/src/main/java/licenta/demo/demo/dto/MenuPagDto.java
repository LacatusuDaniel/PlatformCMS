package licenta.demo.demo.dto;

public class MenuPagDto {
    private Integer pageId;
    private String pageTitle;
    private String pageContent;
    private Integer orderId;

    public MenuPagDto(Integer pageId, String pageTitle, String pageContent, Integer orderId) {
        this.pageId = pageId;
        this.pageTitle = pageTitle;
        this.pageContent = pageContent;
        this.orderId = orderId;
    }

    public Integer getPageId() {
        return pageId;
    }

    public void setPageId(Integer pageId) {
        this.pageId = pageId;
    }

    public String getPageTitle() {
        return pageTitle;
    }

    public void setPageTitle(String pageTitle) {
        this.pageTitle = pageTitle;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public String getPageContent() {
        return pageContent;
    }

    public void setPageContent(String pageContent) {
        this.pageContent = pageContent;
    }
}
