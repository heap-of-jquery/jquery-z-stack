# jQuery Z-Stack
Easily stack textareas (or any other interactive widget) in Z-space.

## Demo
http://gburtini.github.io/jquery-z-stack/example.html

## Usage
1. Include jQuery (a recent version, 1.8 or greater!)
2. Include the JS file.
3. Create a container for your stacked groups. Give it an identifiable selector (e.g., class or ID), say ``#textareaContainer``.
4. Create some inside elements like textareas (or other input elements) inside this container. See note below about complex inside elements.
5. Call ``stackableWidgets(parentContainer = "textareaContainer", insideElement = "textarea")``

### Complex Inside Elements
Inside elements can be "complex" in the sense that they may be made up of multiple fields themselves, simply pass a div or subcontainer in insideElement. The stack will be kept open as long as there is an input element inside the subcontainers currently focused. You may wish to edit this behavior.

## License
Please retain this notice in ALL redistributions as well as a link back to the original repository.

Copyright 2015 Giuseppe Burtini https://github.com/gburtini

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this library except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
