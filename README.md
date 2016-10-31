# slot.jquery.v1.0.0
slot graph

<link href="//dreamidea.in/plugins/slot/slot.v1.0.0.css" rel="stylesheet" type="text/css" />
<script src="//dreamidea.in/plugins/slot/slot.v1.0.0.js"></script>
 <script>
            $(document).ready(function() {
    // attach the plugin to an element
    $('#slot').slot({backColor:'#fff',
        series:[{
                colum_id:'24',
                name:'A1',
                color:'green',
                data:[{name:100},{name:101},{name:102},{name:103},{name:104},{name:105},{name:106},{name:107},{name:108}]
                
        },{  colum_id:'12',
                name:'A2',
                data:[{name:200,color:'red'},{name:201,disabled:true,},{name:202},{name:203},{name:204}]
            },{
                colum_id:'15',
                name:'A5',
                data:[{name:300,},{name:301,disabled:true,},{name:302},{name:303},{name:304},{name:305}]
            },
        ],
           fontSize:'1em', });
});
        </script>


        <slot_canvas id="slot"></slot_canvas>
  


<h3>Events</h3>
SlotClick:

SlotClick(callback) function(index,data,selected) { } 
index is an Index Object that holds the index's information 
data holds the current data Object. 
selected holds the selected data Object.

 ----Events------ 

  SlotClick: function(index,data,selected) {            
       // alert(result.data.name);
    }


serializeClick:

serializeClick(callback) function(index,data,selected) { } 
index holds the all data index Object 
selected holds the selected data Object.

----Events------ 

  serializeClick:function (index,selected){
   },



<h3>Object specification Properties</h3>

backColor:Sets an Slot's background color.
example: backColor:'#fff'fontSize:Sets an Slot's font size. 
fontSize:'1em'series:series (as an array) An array of series Objects that will be displayed on the slot. Here is an example of how to specify an array of series: 
 
 series:[{
                colum_id:'24',
                name:'A1',
                color:'green',
                data:[{name:100},{name:101},{name:102},{name:103},{name:104},{name:105},{name:106},{name:107},{name:108}]
                
        },{
                colum_id:'12',
                name:'A2',
                data:[{name:200,color:'red'},{name:201,disabled:true,},{name:202},{name:203},{name:204}]
            },{
                colum_id:'15',
                name:'A5',
                data:[{name:300,},{name:301,disabled:true,},{name:302},{name:303},{name:304},{name:305}]
            },
        ],
        

