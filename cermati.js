module.exports = {
	
  tags: ['Cermati'],
  'QA Engineer Test' : function (browser) {
    browser
      .url('https://www.cermati.com')
	  .waitForElementVisible('body', 1000)
      .pause(1000);
	
		
    browser.expect.element('body').to.be.present;
	browser.useXpath();
	// Close Popup
	browser.click("//*[@id='desktopBanner']/span[3]");
	// Kartu kredit -> semua
	browser.click("//div[@id='main-navigation']/ul[1]/li/a[contains(text(),'Kartu Kredit')]");
	browser.click("//div[@id='main-navigation']/ul[1]/li/ul/li/a[contains(text(),'Semua')]");
	
	
	// Click penerbit kartu drop down
	browser.click("//span[@id='issuer-label']");
	// Click Bank Bukopin
	browser.click("//form[@id='issuer-filter']//span[contains(text(),'Bank Bukopin')]");
	// Click Bukopin Visa Platinum
	browser.click("//a[@data-item = 'Bukopin Visa Platinum' and @data-button-name ='item-title-credit-card-list-page']");
	
	// Iuran Tahunan Assertion
	browser.getText('//div[@id="product-info-installment"]', function(result){
                res = result.value;
				browser.assert.equal(res, "Rp650.000");
            });
	
	
		
    browser.end();
  }
};
