The code refers to a trait that is not in scope.

Erroneous code example:

```
struct Foo;

impl SomeTrait for Foo {} // error: trait `SomeTrait` is not in scope
```

Please verify that the name of the trait wasn't misspelled and ensure that it
was imported. Example:

```
// solution 1:
use some_file::SomeTrait;

// solution 2:
trait SomeTrait {
    // some functions
}

struct Foo;

impl SomeTrait for Foo { // ok!
    // implements functions
}
```
An unresolved name was used.

Erroneous code examples:

```
something_that_doesnt_exist::foo;
// error: unresolved name `something_that_doesnt_exist::foo`

// or:

trait Foo {
    fn bar() {
        Self; // error: unresolved name `Self`
    }
}

// or:

let x = unknown_variable;  // error: unresolved name `unknown_variable`
```

Please verify that the name wasn't misspelled and ensure that the
identifier being referred to is valid for the given situation. Example:

```
enum something_that_does_exist {
    Foo,
}
```

Or:

```
mod something_that_does_exist {
    pub static foo : i32 = 0i32;
}

something_that_does_exist::foo; // ok!
```

Or:

```
let unknown_variable = 12u32;
let x = unknown_variable; // ok!
```

If the item is not defined in the current module, it must be imported using a
`use` statement, like so:

```
use foo::bar;
bar();
```

If the item you are importing is not defined in some super-module of the
current module, then it must also be declared as public (e.g., `pub fn`).
