Ordbok (Julev.no)

# Core Development

Every new functionality must be properly documented and tested.

# Which Branch?

When creating a new branch, please follow the **Git Flow** standard. For example:

- `feature/*` — feature branches are used to develop new features or improvements.
- `hotfix/*` — hotfix branches are necessary to act immediately upon an undesired status. These will always be squash
  committed and deleted after their merge. **Use these only in case of emergency!**
- `bug/*` — fix branches for reported bugs. These do not have to be deployed immediately unlike hotfix branches.

The name of the branch should consist from 2 to 6 descriptive words connected with dashes.  
Each branch should contain only related changes to the initial purpose of the branch.

Valid examples:

```
feature/sms-module
hotfix/error-502-while-sending-sms
bug/unable-to-choose-recipients
```

# Coding Style

We are following the [PSR-12](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-12-extended-coding-style-guide.md)
coding standard and the [PSR-4](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md)
autoloading standard.

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”,
and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](http://www.ietf.org/rfc/rfc2119.txt).

## Type declaration

Method parameters and method return value SHOULD be declared by a type. All PHP reserved types MUST be in lower case.

## Naming

### Database tables

- Abbreviations MUST NOT be used.
- The name MUST consist at maximum of 3 words with an exception for N:M tables.
- The name MUST be presented in plural.
- The N:M table name MUST consist of singulars.

Valid examples:

```
contacts
contactgroups
contact_contactgroups
organizations
users
```

### Classes and Folders

The respective class or folder representing a database object MUST be presented as singular.

Valid examples for a database table named `contacts`:

```
app/Models/Contact.php
```

### Routes

- Respective routes for a database object MUST be presented in plural.
- URI MUST follow the format set by
  [resource controllers in Laravel](https://laravel.com/docs/8.x/controllers#resource-controllers).
- Routes MUST be in the group if two or more actions are required.
- Route groups MUST have a proper name after a database object (i.e. `contact`) or entity (i.e. `sms`).
- Each route within group MUST have a proper name after an action (i.e. `edit` -> `contact.edit` for
  the respective group).
- Each singular route MUST have a name after an entity and action (i.e. `create` -> `sms.create` for
  the respective group).
- You MUST use `route()` to generate an URL to controllers. You MUST NOT use `action()` helper.

Valid examples:

```
/contacts/1/edit
/contact/group/15/edit
```

### Request classes

- The request class MUST be placed in a sub-folder corresponding the controller location and name (without `Controller`).
- The request class name MUST consist of the action name, the model name and the `Request` word.

Valid examples:

```
app/Http/Requests/Organization/UpdateOrganizationRequest.php
app/Http/Requests/Organization/StoreOrganizationRequest.php
```

### Policies

The class name MUST consist of the model name and the `Policy` word.

### Jobs

Job classes MUST be placed in a sub-folder representing the model and the name SHOULD NOT contain the `Job` word.

Valid examples:

```
TBD.
```

## Models

All models MUST be located in the `app/Models` folder.

## Traits

- Traits MUST be located in the `app/Concern` folder.
- If the respected trait is supposed to be used only by one Eloquent model, it MUST be located in a sub-folder named
  by the model. These traits SHOULD be used only occasionally.

Valid examples:

```
TBD.
```

## Other rules

- Multi-line arrays MUST have a trailing comma.

# PHPDoc

Below is an example of a valid documentation block. Note that the `@param` attribute is followed by two spaces,
the argument type, two more spaces, and finally the variable name:

```php
/**
 * Register a binding with the container.
 *
 * @param  string|array  $abstract
 * @param  Closure|string|null  $concrete
 * @param  bool  $shared
 * @return void
 *
 * @throws Exception
 */
public function bind($abstract, $concrete = null, bool $shared = false): void
{
    //
}
```

## Other rules

- The documentation block MUST consist of one-line introduction created from one sentence.
- The documentation block MAY contain a full description created from paragraphs.
- Between the full description and the one-line introduction MUST be one empty line.
- Between the full description and PHPDoc attributes MUST be one empty line.
- In the description Markdown SHOULD be used.
- All non-mentioned PHPDoc attributes MUST be placed between the full description (or the first line depending whether
  the full description is provided) and the `@param` attribute. These attributes MAY be separated by a line and MUST
  have only one space between the attribute and its content.
