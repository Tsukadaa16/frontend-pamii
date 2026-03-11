export function createHeader(pageName) {
    return `
        <ion-header>
            <ion-toolbar color="secondary">
                <ion-icon name="cafe" style="margin-left: 15px; font-size: 24px" slot="start"></ion-icon>
                <ion-tittle>Quero Café Bar - ${pageName}</ion-tittle>
            </ion-toolbar>
        </ion-header>
    `;
}