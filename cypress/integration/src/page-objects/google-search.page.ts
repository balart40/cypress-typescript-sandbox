export class GoogleSearch {
    //<textarea jsname="yZiJbe" class="gLFyf" jsaction="paste:puy29d;" id="APjFqb" maxlength="2048" name="q"
    googleSearch() {
        // original was input[name="q"
        return cy.get('textarea[name="q"]').first();
    }
    //<input class="gNO89b" value="Google Search" aria-label="Google Search" name="btnK" role="button"
    googleSearchBtn()
    {
        return cy.get('input[name="btnK"]').first();
    }
    //<div jscontroller="uivUtf" id="gsr"
    searchResults(){
        //*[@id="gsr"]
        // original was return cy.get('h3').first();
        //return cy.get('gsr').first();
        //return cy.xpath('//div[@class="r"]/a');
        //return cy.get('gsr')
        return cy.get('#search');
    }
}