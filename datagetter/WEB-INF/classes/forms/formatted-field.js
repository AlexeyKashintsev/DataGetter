/* global Java */

define(['boxing', 'common-utils/color', 'common-utils/cursor', 'common-utils/font', './action-event', './cell-render-event', './component-event', './focus-event', './item-event', './key-event', './value-change-event', './popup-menu'], function(B, Color, Cursor, Font, ActionEvent, RenderEvent, ComponentEvent, FocusEvent, ItemEvent, KeyEvent, ValueChangeEvent, PopupMenu) {
    var className = "com.eas.client.forms.components.FormattedField";
    var javaClass = Java.type(className);
    /**
     * Formatted field component.
     * @param value the value for the formatted field (optional)
     * @constructor FormattedField FormattedField
     */
    function FormattedField(value) {
        var maxArgs = 1;
        var delegate = arguments.length > maxArgs ?
              arguments[maxArgs] 
            : arguments.length === 1 ? new javaClass(B.boxAsJava(value))
            : new javaClass();

        Object.defineProperty(this, "unwrap", {
            configurable: true,
            value: function() {
                return delegate;
            }
        });
        if(FormattedField.superclass)
            FormattedField.superclass.constructor.apply(this, arguments);
        delegate.setPublished(this);
        /**
         * The mouse <code>Cursor</code> over this component.
         */
        this.cursor = new Object();
        Object.defineProperty(this, "cursor", {
            get: function() {
                var value = delegate.cursor;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.cursor = B.boxAsJava(aValue);
            }
        });

        /**
         * Mouse dragged event handler function.
         */
        this.onMouseDragged = new Object();
        Object.defineProperty(this, "onMouseDragged", {
            get: function() {
                var value = delegate.onMouseDragged;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseDragged = aValue;
            }
        });

        /**
         * Mouse released event handler function.
         */
        this.onMouseReleased = new Object();
        Object.defineProperty(this, "onMouseReleased", {
            get: function() {
                var value = delegate.onMouseReleased;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseReleased = aValue;
            }
        });

        /**
         * Keyboard focus lost by the component event handler function.
         */
        this.onFocusLost = new Object();
        Object.defineProperty(this, "onFocusLost", {
            get: function() {
                var value = delegate.onFocusLost;
                return value;
            },
            set: function(aValue) {
                delegate.onFocusLost = aValue;
            }
        });

        /**
         * Value change handler.
         */
        this.onValueChange = new Object();
        Object.defineProperty(this, "onValueChange", {
            get: function() {
                var value = delegate.onValueChange;
                return value;
            },
            set: function(aValue) {
                delegate.onValueChange = aValue;
            }
        });

        /**
         * The text to be shown when component's value is absent.
         */
        this.emptyText = '';
        Object.defineProperty(this, "emptyText", {
            get: function() {
                var value = delegate.emptyText;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.emptyText = B.boxAsJava(aValue);
            }
        });

        /**
         * Mouse pressed event handler function.
         */
        this.onMousePressed = new Object();
        Object.defineProperty(this, "onMousePressed", {
            get: function() {
                var value = delegate.onMousePressed;
                return value;
            },
            set: function(aValue) {
                delegate.onMousePressed = aValue;
            }
        });

        this.onParse = new Object();
        Object.defineProperty(this, "onParse", {
            get: function() {
                var value = delegate.onParse;
                return value;
            },
            set: function(aValue) {
                delegate.onParse = aValue;
            }
        });

        /**
         * The foreground color of this component.
         */
        this.foreground = new Object();
        Object.defineProperty(this, "foreground", {
            get: function() {
                var value = delegate.foreground;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.foreground = B.boxAsJava(aValue);
            }
        });

        /**
         * An error message of this component.
         * Validation procedure may set this property and subsequent focus lost event will clear it.
         */
        this.error = '';
        Object.defineProperty(this, "error", {
            get: function() {
                var value = delegate.error;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.error = B.boxAsJava(aValue);
            }
        });

        /**
         * Determines whether this component is enabled. An enabled component can respond to user input and generate events. Components are enabled initially by default.
         */
        this.enabled = true;
        Object.defineProperty(this, "enabled", {
            get: function() {
                var value = delegate.enabled;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.enabled = B.boxAsJava(aValue);
            }
        });

        /**
         * Component moved event handler function.
         */
        this.onComponentMoved = new Object();
        Object.defineProperty(this, "onComponentMoved", {
            get: function() {
                var value = delegate.onComponentMoved;
                return value;
            },
            set: function(aValue) {
                delegate.onComponentMoved = aValue;
            }
        });

        /**
         * Widget's value.
         */
        this.value = new Object();
        Object.defineProperty(this, "value", {
            get: function() {
                var value = delegate.jsValue;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.jsValue = B.boxAsJava(aValue);
            }
        });

        /**
         * <code>PopupMenu</code> that assigned for this component.
         */
        this.componentPopupMenu = new Object();
        Object.defineProperty(this, "componentPopupMenu", {
            get: function() {
                var value = delegate.componentPopupMenu;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.componentPopupMenu = B.boxAsJava(aValue);
            }
        });

        /**
         * Vertical coordinate of the component.
         */
        this.top = 0;
        Object.defineProperty(this, "top", {
            get: function() {
                var value = delegate.top;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.top = B.boxAsJava(aValue);
            }
        });

        /**
         * Component resized event handler function.
         */
        this.onComponentResized = new Object();
        Object.defineProperty(this, "onComponentResized", {
            get: function() {
                var value = delegate.onComponentResized;
                return value;
            },
            set: function(aValue) {
                delegate.onComponentResized = aValue;
            }
        });

        /**
         * ValueType hint for the field. It is used to determine, how to interpret format pattern.
         */
        this.valueType = 0;
        Object.defineProperty(this, "valueType", {
            get: function() {
                var value = delegate.valueType;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.valueType = B.boxAsJava(aValue);
            }
        });

        /**
         * Parent container of this widget.
         */
        this.parent = new Object();
        Object.defineProperty(this, "parent", {
            get: function() {
                var value = delegate.parentWidget;
                return B.boxAsJs(value);
            }
        });

        /**
        * Text on the component.
        */
        this.text = '';
        Object.defineProperty(this, "text", {
            get: function() {
                var value = delegate.text;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.text = B.boxAsJava(aValue);
            }
        });

        /**
         * Mouse entered over the component event handler function.
         */
        this.onMouseEntered = new Object();
        Object.defineProperty(this, "onMouseEntered", {
            get: function() {
                var value = delegate.onMouseEntered;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseEntered = aValue;
            }
        });

        /**
         * The tooltip string that has been set with.
         */
        this.toolTipText = '';
        Object.defineProperty(this, "toolTipText", {
            get: function() {
                var value = delegate.toolTipText;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.toolTipText = B.boxAsJava(aValue);
            }
        });

        /**
         * Height of the component.
         */
        this.height = 0;
        Object.defineProperty(this, "height", {
            get: function() {
                var value = delegate.height;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.height = B.boxAsJava(aValue);
            }
        });

        /**
         * Component shown event handler function.
         */
        this.onComponentShown = new Object();
        Object.defineProperty(this, "onComponentShown", {
            get: function() {
                var value = delegate.onComponentShown;
                return value;
            },
            set: function(aValue) {
                delegate.onComponentShown = aValue;
            }
        });

        /**
         * Native API. Returns low level html element. Applicable only in HTML5 client.
         */
        this.element = new Object();
        Object.defineProperty(this, "element", {
            get: function() {
                var value = delegate.element;
                return B.boxAsJs(value);
            }
        });

        /**
         * Mouse moved event handler function.
         */
        this.onMouseMoved = new Object();
        Object.defineProperty(this, "onMouseMoved", {
            get: function() {
                var value = delegate.onMouseMoved;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseMoved = aValue;
            }
        });

        this.onFormat = new Object();
        Object.defineProperty(this, "onFormat", {
            get: function() {
                var value = delegate.onFormat;
                return value;
            },
            set: function(aValue) {
                delegate.onFormat = aValue;
            }
        });

        /**
         * True if this component is completely opaque.
         */
        this.opaque = true;
        Object.defineProperty(this, "opaque", {
            get: function() {
                var value = delegate.opaque;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.opaque = B.boxAsJava(aValue);
            }
        });

        /**
         * Determines whether this component should be visible when its parent is visible.
         */
        this.visible = true;
        Object.defineProperty(this, "visible", {
            get: function() {
                var value = delegate.visible;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.visible = B.boxAsJava(aValue);
            }
        });

        /**
         * Component hidden event handler function.
         */
        this.onComponentHidden = new Object();
        Object.defineProperty(this, "onComponentHidden", {
            get: function() {
                var value = delegate.onComponentHidden;
                return value;
            },
            set: function(aValue) {
                delegate.onComponentHidden = aValue;
            }
        });

        /**
         * Overrides the default focus traversal policy for this component's focus traversal cycle by unconditionally setting the specified component as the next component in the cycle, and this component as the specified component's previous component.
         */
        this.nextFocusableComponent = new Object();
        Object.defineProperty(this, "nextFocusableComponent", {
            get: function() {
                var value = delegate.nextFocusableComponent;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.nextFocusableComponent = B.boxAsJava(aValue);
            }
        });

        /**
        * Field text format.
        */
        this.format = '';
        Object.defineProperty(this, "format", {
            get: function() {
                var value = delegate.format;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.format = B.boxAsJava(aValue);
            }
        });

        /**
         * Main action performed event handler function.
         */
        this.onActionPerformed = new Object();
        Object.defineProperty(this, "onActionPerformed", {
            get: function() {
                var value = delegate.onActionPerformed;
                return value;
            },
            set: function(aValue) {
                delegate.onActionPerformed = aValue;
            }
        });

        /**
         * Key released event handler function.
         */
        this.onKeyReleased = new Object();
        Object.defineProperty(this, "onKeyReleased", {
            get: function() {
                var value = delegate.onKeyReleased;
                return value;
            },
            set: function(aValue) {
                delegate.onKeyReleased = aValue;
            }
        });

        /**
         * Determines whether this component may be focused.
         */
        this.focusable = true;
        Object.defineProperty(this, "focusable", {
            get: function() {
                var value = delegate.focusable;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.focusable = B.boxAsJava(aValue);
            }
        });

        /**
         * Key typed event handler function.
         */
        this.onKeyTyped = new Object();
        Object.defineProperty(this, "onKeyTyped", {
            get: function() {
                var value = delegate.onKeyTyped;
                return value;
            },
            set: function(aValue) {
                delegate.onKeyTyped = aValue;
            }
        });

        /**
         * Mouse wheel moved event handler function.
         */
        this.onMouseWheelMoved = new Object();
        Object.defineProperty(this, "onMouseWheelMoved", {
            get: function() {
                var value = delegate.onMouseWheelMoved;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseWheelMoved = aValue;
            }
        });

        /**
         * Native API. Returns low level swing component. Applicable only in J2SE swing client.
         */
        this.component = new Object();
        Object.defineProperty(this, "component", {
            get: function() {
                var value = delegate.component;
                return B.boxAsJs(value);
            }
        });

        /**
         * Keyboard focus gained by the component event.
         */
        this.onFocusGained = new Object();
        Object.defineProperty(this, "onFocusGained", {
            get: function() {
                var value = delegate.onFocusGained;
                return value;
            },
            set: function(aValue) {
                delegate.onFocusGained = aValue;
            }
        });

        /**
         * Horizontal coordinate of the component.
         */
        this.left = 0;
        Object.defineProperty(this, "left", {
            get: function() {
                var value = delegate.left;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.left = B.boxAsJava(aValue);
            }
        });

        /**
         * The background color of this component.
         */
        this.background = new Object();
        Object.defineProperty(this, "background", {
            get: function() {
                var value = delegate.background;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.background = B.boxAsJava(aValue);
            }
        });

        /**
         * Mouse clicked event handler function.
         */
        this.onMouseClicked = new Object();
        Object.defineProperty(this, "onMouseClicked", {
            get: function() {
                var value = delegate.onMouseClicked;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseClicked = aValue;
            }
        });

        /**
         * Mouse exited over the component event handler function.
         */
        this.onMouseExited = new Object();
        Object.defineProperty(this, "onMouseExited", {
            get: function() {
                var value = delegate.onMouseExited;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseExited = aValue;
            }
        });

        /**
         * Gets name of this component.
         */
        this.name = '';
        Object.defineProperty(this, "name", {
            get: function() {
                var value = delegate.name;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.name = B.boxAsJava(aValue);
            }
        });

        /**
         * Width of the component.
         */
        this.width = 0;
        Object.defineProperty(this, "width", {
            get: function() {
                var value = delegate.width;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.width = B.boxAsJava(aValue);
            }
        });

        /**
         * The font of this component.
         */
        this.font = new Object();
        Object.defineProperty(this, "font", {
            get: function() {
                var value = delegate.font;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.font = B.boxAsJava(aValue);
            }
        });

        /**
         * Key pressed event handler function.
         */
        this.onKeyPressed = new Object();
        Object.defineProperty(this, "onKeyPressed", {
            get: function() {
                var value = delegate.onKeyPressed;
                return value;
            },
            set: function(aValue) {
                delegate.onKeyPressed = aValue;
            }
        });

    }
    /**
     * Tries to acquire focus for this component.
     * @method focus
     * @memberOf FormattedField
     */
    FormattedField.prototype.focus = function() {
        var delegate = this.unwrap();
        var value = delegate.focus();
        return B.boxAsJs(value);
    };


    var ScriptsClass = Java.type("com.eas.script.Scripts");
    var space = ScriptsClass.getSpace();
    space.putPublisher(className, function(aDelegate) {
        return new FormattedField(null, aDelegate);
    });
    return FormattedField;
});