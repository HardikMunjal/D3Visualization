var arr=[
    {id: 1, title: 'hello', parent: 0},
    {id: 2, title: 'hello', parent: 0},
    {id: 3, title: 'hello', parent: 1},
    {id: 4, title: 'hello', parent: 3},
    {id: 5, title: 'hello', parent: 4},
    {id: 6, title: 'hello', parent: 4},
    {id: 7, title: 'hello', parent: 3},
    {id: 8, title: 'hello', parent: 2}
]


function getNestedChildren(arr, parent) {
    var out = []
    console.log(arr);
    console.log(parent);
    for(var i in arr) {
      console.log('coming here');
        if(arr[i].parent == parent) {
          console.log('but not here');
            var children = getNestedChildren(arr, arr[i].id)

            if(children.length) {
                arr[i].children = children
            }
            out.push(arr[i])
        }
    }
    console.log(out);
    return out
}
getNestedChildren(arr,0)

