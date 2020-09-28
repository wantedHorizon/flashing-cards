# Flashing Cards-

## ReactJS 

# **State object**

```
state = {

    displayedData: [{}, {}.....]
    loading: true/false
    currentRegion: global/asia/europe/america/ singleCountry['code']
    currentStatisticsType =
                            - Confirmed Cases
                            - Number of Deaths
                            - Number of recovered
                            - Number of critical condition




}
```

## **METHODS**

- **fetchAndParse = async(url)**

  > fetch data from specific url and parse it.

- **fetchCovidAll async()**

  > fetch covid-19 info worldwide.

- **fetchCovidByCountryCode(code)**
  > fetch covid-19 info of single country by cca2.

* **fetchCountriesCodeByRegion= async(region)**
  > fetch covid-19 info of a full region by calling etchCovidByCountryCode multiple times.



- **showLoading**
  >  add loading icon


- **removeLoading**
  > remove loading icon
- **displaySingleCountry**
  > display single country data

- **displayMultiCountries**
  > display chart object

- **mapDataToTable**
  > convert countries data to relevant.

- **updateCharts**
  > creating updated chart object from selectedData


# Components Structure

```
    <App>
        <Header />

        <BrowserRouter>
            <Switch>
                <Game>//Route={game}
                    <Deck >
                        {<Card />}*
                    </Deck>
                    <Deck > 
                       { <Card />}*
                      
                    </Deck>
                    ....
                    .
                    .
                    .
                    .
                </Game>
                <Manage>//Route={Manage} 
                
                </Manage>

            

             </Switch> 
        </BrowserRouter>
    </App>
}
```

<!-- ## Card Object Description -->