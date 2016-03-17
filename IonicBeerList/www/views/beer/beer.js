<ion-view>
    <ion-nav-title>
        OpenBeer
    </ion-nav-title>
    <ion-content class="padding">
        <div class="item item-energized">
            <h2 class="title">{{data.data.name}}</h2>
        </div>

        <div class="card">
            <div class="item item-text-wrap">
                <b>Description :</b> {{data.data.style.description}}
            </div>
        </div>

        <div class="card">
            <div class="item item-text-wrap">
                <p><b>Category :</b> {{data.data.style.category.name}}</p>
                <p><b>Alcohol volume :</b> {{data.data.abv}} %</p>
                <p><b>Serving temperature :</b> {{data.data.servingTemperatureDisplay}}</p>
                <p><b>Glass :</b> {{data.data.glass.name}}</p>
                <p><b>Status :</b> {{data.data.statusDisplay}}</p>
            </div>
        </div>



    </ion-content>
</ion-view>