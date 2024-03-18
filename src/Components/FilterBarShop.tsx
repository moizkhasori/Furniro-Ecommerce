import FilterIcon from "../assets/icons/filterIcon.png";

const FilterBarShop = () => {
  return (
    <div className="FilterBarShop">
        <div className="wrapperdiv">
            <div className="leftSide">
                <div className="filterdiv">
                    <div>
                        <img src={FilterIcon} alt="" />
                    </div>
                    <span>Filter</span>
                </div>
                <div className="linediv"></div>
                <div className="textdiv">Showing 1-16 of 32 results</div>
            </div>
            <div className="rightSide">
                <div className="showdiv">
                    <span>Show</span>
                    <div>16</div>
                </div>
                <div className="sortbydiv">
                    <span>Sort by</span>
                    <div>Default</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FilterBarShop